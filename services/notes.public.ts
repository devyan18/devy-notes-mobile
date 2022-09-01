import { INote } from '../models/entities'

const URL = 'https://dws-notes-typegoose-production.up.railway.app'

export const getNotes = async (token: string, folderId: string) => {
  const request = await fetch(`${URL}/api/v1/notes/${folderId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  })
  const response = await request.json()
  return response as INote[]
}
