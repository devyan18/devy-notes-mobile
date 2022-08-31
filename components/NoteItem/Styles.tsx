import { Dimensions, StyleSheet } from 'react-native'
import { useTheme } from '../../context/ThemeProvider'
import useColorsTheme from '../../hooks/useColorsTheme'

export default function Styles () {
  const theme = useTheme()
  const colors = useColorsTheme(theme)

  return StyleSheet.create({
    container: {
      padding: 10,
      width: Dimensions.get('window').width,
      height: 60,
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomColor: colors.divider,
      borderBottomWidth: 1
    },
    title: {
      fontSize: 20,
      color: colors.text,
      marginLeft: 10
    }
  })
}
