export async function deleteGoalCompletion(completionId : string) {
  await fetch('https://goals-back.vercel.app/completion', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: {
      id: completionId
    }
  })
}
