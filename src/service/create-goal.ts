import { getGl } from '../utils/getGl';

export async function createGoal(goalData : any) {
   await fetch(`${'https://goals-back.vercel.app'}/goal`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: getGl()
    },
    body: JSON.stringify(goalData)
  })
}
