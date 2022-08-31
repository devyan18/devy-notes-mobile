import { IFolder } from '../models/entities'

export const getFolders = async (token: string) => {
  const request = await fetch('http://192.168.0.112:4031/api/v1/folders', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  })
  const response = await request.json()
  return response as IFolder[]
}
