import { useState } from 'react'
import { getToken } from '../services/auth.public'

const useLogin = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [token, setToken] = useState('')

  const submit = (email: string, password: string) => {
    setLoading(true)
    getToken(email, password)
      .then(token => {
        setToken(token.token)
      })
      .catch(e => {
        setError(e)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return { token, loading, error, submit }
}

export default useLogin
