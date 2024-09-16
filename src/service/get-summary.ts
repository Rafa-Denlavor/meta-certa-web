import type { TSummary } from "../types/TSummary";

export async function getSummary(url: string): Promise<TSummary> {
  const response = await fetch(`https://goals-back.vercel.app${url}`);
  const data = await response.json();

  return data.summary[0];
}
