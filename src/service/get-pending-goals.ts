import { getGl } from '../utils/getGl';

type PendingGoalsResponse = {
  id: string;
  title: string;
  desiredWeeklyFrequency: number;
  completionCount: number;
}[];

export async function getPendingGoals(url : string) : Promise<PendingGoalsResponse> {
  const response = await fetch(`${'https://goals-back.vercel.app'}${url}`, {
    headers: {
      Authorization: getGl()
    }
  });
  const data = await response.json();

  return data.pendingGoals;
}
