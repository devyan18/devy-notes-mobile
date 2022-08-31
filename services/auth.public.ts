import { IUser } from '../models/entities'

const URL = 'https://dws-users.herokuapp.com'

export const getUser = async (token: string): Promise<IUser | null> => {
  const response = await fetch(`${URL}/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token || ''
    }
  })
  const data = await response.json()

  if (!data) {
    return null
  }
  return data as IUser
}

export const getToken = async (email: string, password: string) => {
  return fetch(`${URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  }).then(res => res.json())
}
