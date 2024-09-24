type TCreateUser = {
  username: string;
  name: string;
  email?: string;
  password: string;
}

export async function createUser(userInfo : TCreateUser) {
   const response = await fetch(`${'https://goals-back.vercel.app'}/user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo)
  })

  const result = await response.text();

  return JSON.parse(result);
}
