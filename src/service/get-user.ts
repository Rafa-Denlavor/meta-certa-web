import { getGl } from '../utils/getGl';

export async function getUser() {
   const response = await fetch(`${'https://goals-back.vercel.app'}/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: getGl()
    }
  })

  const data = await response.json();

  return data?.[0];
}
