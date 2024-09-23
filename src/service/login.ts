type TLogin = {
  username: string;
  password: string;
}

export async function login(userInfo : TLogin) {
   const response = await fetch(`${'https://goals-back.vercel.app'}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo)
  });

  const result = await response.text();

  return JSON.parse(result);
}
