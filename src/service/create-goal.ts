export async function createGoal(goalData : any) {
   await fetch('https://goals-back.vercel.app/goal', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(goalData)
  })
}
