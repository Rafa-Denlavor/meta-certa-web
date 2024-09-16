export async function createGoal(goalData : any) {
   await fetch('https://goals-back.vercel.app/goals', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(goalData)
  })
}
