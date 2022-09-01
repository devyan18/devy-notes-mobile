import { useLayoutEffect } from 'react'
import { View, Switch, Text } from 'react-native'
import { useTheme, useToggleDarkMode } from '../../context/ThemeProvider'
import useColorsTheme from '../../hooks/useColorsTheme'
import Styles from './Styles'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../screens/Manager'
import Button from '../Button'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useSetSession } from '../../context/SessionProvider'

export type settingsListScreenProp = StackNavigationProp<RootStackParamList, 'Settings'>

export default function Settings () {
  const styles = Styles()

  const setSession = useSetSession()

  const navigation = useNavigation<settingsListScreenProp>()

  const theme = useTheme()
  const colors = useColorsTheme(theme)

  const toggleDarkMode = useToggleDarkMode()

  const handleLogout = () => {
    AsyncStorage.removeItem('token')
    setSession({
      token: null,
      user: null
    })
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Settings',
      headerStyle: {
        backgroundColor: colors.background
      },
      headerTintColor: colors.primary
    })
  }, [colors])

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Switch DarkMode</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#ccc' }}
          thumbColor={colors.primary}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleDarkMode}
          value={!theme}
        />
      </View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Button onPress={handleLogout} text='Logout' type='primary' />
      </View>
    </View>
  )
}
