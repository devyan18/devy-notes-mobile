import { useEffect, useState } from 'react'
import { IUser } from '../models/entities'
import { getUser } from '../services/auth.public'

export default function useUser (token: string) {
  const [user, setUser] = useState<IUser | null>(null)

  useEffect(() => {
    if (token) {
      getUser(token)
        .then(setUser)
    }
  }, [])

  return { user }
}
