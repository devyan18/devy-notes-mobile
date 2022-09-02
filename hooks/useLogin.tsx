import { useState } from 'react'
import { getToken } from '../services/auth.public'
import { ToastAndroid } from 'react-native'

const useLogin = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [token, setToken] = useState('')

  const submit = (email: string, password: string) => {
    setLoading(true)
    getToken(email, password)
      .then(response => {
        if (response.token) {
          setToken(response.token)
        } else {
          ToastAndroid.show('Email or Password incorrect', ToastAndroid.LONG)
        }
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
