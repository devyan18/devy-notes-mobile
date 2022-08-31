import { INote } from '../models/entities'

export const getNotes = async (token: string, folderId: string) => {
  const request = await fetch(`http://192.168.0.112:4031/api/v1/notes/${folderId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  })
  const response = await request.json()
  return response as INote[]
}
