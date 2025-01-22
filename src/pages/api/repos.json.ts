import { writeFile, readFile, mkdir } from "node:fs/promises";
import { GITHUB_USERNAME } from "astro:env/server";
import path from "node:path";

const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;
const CACHE_DIR = path.join(process.cwd(), ".cache");
const CACHE_FILE = path.join(CACHE_DIR, "repos.json");
const CACHE_DURATION = 3600 * 1000; // 1 hour

export async function GET() {
  try {
    await mkdir(CACHE_DIR, { recursive: true });

    // Check if cache file exists
    const cache = await readFile(CACHE_FILE, "utf8").catch(() => null);
    if (cache) {
      const { data, timestamp } = JSON.parse(cache);
      const now = Date.now();

      if (now - timestamp < CACHE_DURATION) {
        return Response.json(data);
      }
    }
    
    // Fetch data from GitHub API
    const response = await fetch(GITHUB_API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch data from GitHub API");
    }
    const data = await response.json();

    // Write data to cache file
    await writeFile(
      CACHE_FILE,
      JSON.stringify({ data, timestamp: Date.now() }),
      'utf-8'
    )
    
    return Response.json(data)
  } catch (error: unknown) {
    if (error instanceof Error) {
      return Response.json({
        error: error.message
      }, { status: 500 })
    } else {
      return Response.json({
        status: 500,
        error: "Unknown error"
      }, { status: 500 })
    }
  }
}