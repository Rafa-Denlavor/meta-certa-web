import type { TSummary } from "../types/TSummary";

export async function getSummary(url: string): Promise<TSummary> {
  const response = await fetch(`http://localhost:3333${url}`);
  const data = await response.json();

  return data.summary[0];
}
