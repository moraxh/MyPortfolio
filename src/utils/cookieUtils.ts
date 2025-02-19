import type { AstroGlobal } from 'astro';

interface Repo {
  n: string;
  s: number;
}

interface GithubData {
  c: number;
  r: Repo[] | [];
}

export async function getOrSetGithubData(Astro: AstroGlobal): Promise<GithubData> {
  const cookieName = 'githubData';

  if (!Astro.cookies.has(cookieName)) {
    const reposResponse = await fetch(`${Astro.url.origin}/api/repos.json`);
    const githubData: GithubData = reposResponse.ok ? await reposResponse.json() : { c: 0, r: [] };

    Astro.cookies.set(cookieName, JSON.stringify(githubData), {
      maxAge: 86400, // 1 day in seconds
    });

    return githubData;
  }

  const cookie = Astro.cookies.get(cookieName);
  if (cookie?.value) {
    return JSON.parse(cookie.value);
  }

  return { c: 0, r: [] };
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