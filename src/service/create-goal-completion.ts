import { getGl } from '../utils/getGl';

export async function createGolCompletion(goalId : string) : Promise<any> {
  await fetch(`${'https://goals-back.vercel.app'}/completion`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: getGl()
    },
    body: JSON.stringify({
      goalId
    })
  })
}
