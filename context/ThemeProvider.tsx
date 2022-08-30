import AsyncStorage from '@react-native-async-storage/async-storage'
import { createContext, useState, useContext, useEffect } from 'react'
import { getThemeMode } from '../services/themeMode.local'

export interface Colors {
  primary: string
  secondary: string
  background: string
  text: string
  secondaryText: string
}

interface Context {
  darkMode: boolean
  toggleDarkMode: () => void
}
const initialDarkModeValue = true

const ThemeContext = createContext<Context>({
  darkMode: initialDarkModeValue,
  toggleDarkMode: () => {}
})

interface Props {
  children: JSX.Element | JSX.Element[]
}

function ThemeProvider (props: Props) {
  const [darkMode, setDarkMode] = useState<boolean>(initialDarkModeValue)

  useEffect(() => {
    getThemeMode().then(theme => {
      setDarkMode(theme === 'dark')
    })
  }, [])

  const toggleThemeWithAsyncStorage = (theme: boolean) => {
    AsyncStorage.setItem('theme', theme ? 'dark' : 'light')
  }

  useEffect(() => {
    toggleThemeWithAsyncStorage(darkMode)
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev)
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

const useTheme = () => useContext(ThemeContext).darkMode
const useToggleDarkMode = () => useContext(ThemeContext).toggleDarkMode

export { useTheme, useToggleDarkMode }
export default ThemeProvider
