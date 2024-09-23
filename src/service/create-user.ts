type TCreateUser = {
  username: string;
  name: string;
  email?: string;
  password: string;
}

export async function createUser(userInfo : TCreateUser) {
   await fetch(`${'https://goals-back.vercel.app'}/create-user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo)
  })
}
