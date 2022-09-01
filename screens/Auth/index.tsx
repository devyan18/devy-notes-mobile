import { useEffect, useState } from 'react'
import { Text, ToastAndroid, View } from 'react-native'
import { useSetSession } from '../../context/SessionProvider'

import Button from '../../components/Button'
import InputForm from '../../components/InputForm'
import useLogin from '../../hooks/useLogin'

import Styles from './Styles'

export default function Auth () {
  const styles = Styles()
  const [email, setEmail] = useState('test@gmail.com')
  const [password, setPassword] = useState('test')

  const setSession = useSetSession()

  const { token, loading, error, submit } = useLogin()

  const handleSubmit = () => {
    if (email.length > 0 && password.length > 0) {
      submit(email, password)
    }
  }

  useEffect(() => {
    if (token) {
      setSession({
        token,
        user: null
      })
    }
    if (error) {
      ToastAndroid.show('Unexpected Error', ToastAndroid.LONG)
    }
    setEmail('')
    setPassword('')
  }, [token])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to continue</Text>
      <View>
        <InputForm
          onChange={value => setEmail(value)}
          value={email}
          placeholder='Email...'
          type='email-address'
        />
        <InputForm
          onChange={value => setPassword(value)}
          value={password}
          placeholder='Password...'
          type='default'
          secureTextEntry={true}
        />
        <Button activity={loading} text='Login' onPress={handleSubmit} type='primary'/>
      </View>
    </View>
  )
}
