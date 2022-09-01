import { IFolder } from '../models/entities'

const URL = 'https://dws-notes-typegoose-production.up.railway.app'

export const getFolders = async (token: string) => {
  const request = await fetch(`${URL}/api/v1/folders`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  })
  const response = await request.json()
  return response as IFolder[]
}
