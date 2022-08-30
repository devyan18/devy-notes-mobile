import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import Button from '../../components/Button'
import InputForm from '../../components/InputForm'
import { useSetSession } from '../../context/SessionProvider'
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
    console.log(token)
  }, [token])

  if (error) {
    return (
      <View style={styles.container}>
        <Text>hubo un error</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar style='dark'/>
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
