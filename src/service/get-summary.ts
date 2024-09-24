import type { TSummary } from "../types/TSummary";
import { getGl } from '../utils/getGl';

export async function getSummary(url: string): Promise<TSummary> {
  const response = await fetch(`${'https://goals-back.vercel.app'}${url}`, {
    headers: {
      Authorization: getGl()
    }
  });
  const data = await response.json();

  return data?.summary?.[0];
}
