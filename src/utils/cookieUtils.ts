import type { AstroGlobal } from 'astro';

interface Repo {
  n: string;
  s: number;
}

interface GithubData {
  c: number;
  v: boolean | undefined
  r: Repo[] | [];
}

const defaultGithubData: GithubData = { c: 0, v: false, r: [] };

export async function getOrSetGithubData(Astro: AstroGlobal): Promise<GithubData> {
  const cookieName = 'githubData';

  // Get the cookie 
  const cookie = Astro.cookies.get(cookieName);

  if (cookie?.value) {
    try {
      const githubData: GithubData = JSON.parse(cookie.value)

      if (githubData.v) {
        return githubData
      }
    } catch (error) {
      console.error("Error parsing GitHub data from cookies:", error);
      return defaultGithubData
    }
  }

  try {
    const reposResponse = await fetch(`${Astro.url.origin}/api/repos.json`);
    if (!reposResponse.ok) {
      throw new Error("Failed to fetch data from GitHub API");
    }

    const githubData: GithubData = await reposResponse.json();

    Astro.cookies.set(cookieName, JSON.stringify(githubData), {
      maxAge: 86400, // 1 day in seconds
    })

    return githubData
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return defaultGithubData
  }
}

export function getOrSetEntryAnimationDisabled(Astro: AstroGlobal): boolean {
  if (Astro.cookies.has('animationDisabled')) {
    return true
  } else {
    Astro.cookies.set('animationDisabled', 'true', {
      maxAge: 300, // 5 minutes in seconds
    });

    return false
  }
}