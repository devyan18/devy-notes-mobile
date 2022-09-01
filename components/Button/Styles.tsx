import { Dimensions, StyleSheet } from 'react-native'
import { useTheme } from '../../context/ThemeProvider'
import useColorsTheme from '../../hooks/useColorsTheme'

export default function Styles (type: string) {
  const theme = useTheme()
  const colors = useColorsTheme(theme)

  if (type === 'primary') {
    return StyleSheet.create({
      button: {
        height: 50,
        width: Dimensions.get('window').width - 120,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
        marginTop: 10,
        borderRadius: 12
      },
      text: {
        color: '#eee',
        fontSize: 20,
        fontWeight: 'bold'
      }
    })
  } else {
    return StyleSheet.create({
      button: {
        height: 50,
        width: Dimensions.get('window').width - 120,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#343536',
        marginTop: 10,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#aaa'
      },
      text: {
        color: '#aaa',
        fontSize: 20,
        fontWeight: 'bold'
      }
    })
  }
}
