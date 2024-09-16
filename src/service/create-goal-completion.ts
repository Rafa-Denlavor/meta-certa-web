export async function createGolCompletion(goalId : string) : Promise<any> {
  await fetch(`https://goals-back.vercel.app/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      goalId
    })
  })
}
