import { writeFile, readFile, mkdir } from "node:fs/promises";
import { GITHUB_USERNAME, BLOB_READ_WRITE_TOKEN } from "astro:env/server";
import path from "node:path";
import { put, list } from "@vercel/blob";

const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;
const CACHE_DIR = "cache";
const CACHE_FILE = `${CACHE_DIR}/repos.json`;
const CACHE_DURATION = 3600 * 1000 * 24; // 1 day

process.env.BLOB_READ_WRITE_TOKEN = BLOB_READ_WRITE_TOKEN;

export async function GET() {
  try {
    // Check if cache file exists
    const blobListResponse = await list({
      prefix: CACHE_DIR
    })

    const cacheUrl = blobListResponse.blobs.find(blob => blob.pathname.includes(CACHE_FILE))

    if (cacheUrl) {
      // Download cache file
      const cacheResponse = await fetch(cacheUrl.url)
      const cache = cacheResponse.ok ? await cacheResponse.json() : null

      if (cache) {
        const { d, t } = cache;
        const now = Date.now();

        // Check if cache is expired
        if (now - t < CACHE_DURATION) {
          return Response.json(d);
        }
      }
    }
    
    // Fetch data from GitHub API
    const response = await fetch(GITHUB_API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch data from GitHub API");
    }

    const raw_data: { name: string, html_url: string, stargazers_count: number }[] = await response.json();

    // Manage data
    // c = count
    // r = repos
    // n = name
    // s = stars
    const data = {
      c: raw_data.length,
      r: raw_data.map(repo => {
        return {
          n: repo.name,
          s: repo.stargazers_count,
        }
      })
    }

    // Write data to cache file
    // d = data
    // t = timestamp
    await put(
      CACHE_FILE,
      JSON.stringify({d: data, t: Date.now()}),
      { 
        access: 'public',
        addRandomSuffix: false
      }
    )
    
    return Response.json(data)
  } catch (error: unknown) {
    console.log(error)
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