export async function createGolCompletion(goalId) : Promise<any> {
  const request = await fetch(`http://localhost:3333/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      goalId
    })
  })
}
