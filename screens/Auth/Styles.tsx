import { StyleSheet } from 'react-native'
import { useTheme } from '../../context/ThemeProvider'
import useColorsTheme from '../../hooks/useColorsTheme'

export default function Styles () {
  const theme = useTheme()

  const colors = useColorsTheme(theme)

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.text
    }
  })
}
