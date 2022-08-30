import { StyleSheet, Dimensions } from 'react-native'
import { useTheme } from '../../context/ThemeProvider'
import useColorsTheme from '../../hooks/useColorsTheme'

export default function Styles () {
  const theme = useTheme()

  const colors = useColorsTheme(theme)

  return StyleSheet.create({
    input: {
      color: colors.text,
      width: Dimensions.get('window').width - 120,
      borderWidth: 1,
      borderColor: '#666',
      borderRadius: 12,
      height: 50,
      marginTop: 10,
      padding: 12
    }
  })
}
