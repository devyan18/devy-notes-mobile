import { useEffect, useState } from 'react'
import { Colors } from '../context/ThemeProvider'

const useColorsTheme = (darkMode: boolean): Colors => {
  const [colors, setColors] = useState<Colors>({
    primary: '',
    secondary: '',
    background: '',
    divider: '',
    text: '',
    secondaryText: ''
  })

  useEffect(() => {
    setColors({
      primary: '#a020f0',
      secondary: '#666666',
      background: darkMode ? '#242526' : '#ffffff',
      divider: darkMode ? '#2C2E2F' : '#ddd',
      text: darkMode ? '#ffffff' : '#000000',
      secondaryText: darkMode ? '#999999' : '#444444'
    })
  }, [darkMode])

  return colors
}

export default useColorsTheme
