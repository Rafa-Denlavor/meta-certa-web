import { getGl } from '../utils/getGl';

export async function deleteGoalCompletion(completionId : string) {
  await fetch(`${'https://goals-back.vercel.app'}/completion`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    Authorization: getGl()
    },
    body: JSON.stringify({
      id: completionId
    })
  })
}
