import { StyleSheet } from 'react-native'
import { useTheme } from '../../context/ThemeProvider'
import useColorsTheme from '../../hooks/useColorsTheme'

export default function Styles () {
  const theme = useTheme()
  const colors = useColorsTheme(theme)

  return StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: colors.background
    },
    box: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: colors.divider
    },
    text: {
      fontSize: 20,
      color: colors.text
    }
  })
}
