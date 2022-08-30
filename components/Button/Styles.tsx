import { Dimensions, StyleSheet } from 'react-native'

export default function Styles (type: string) {
  if (type === 'primary') {
    return StyleSheet.create({
      button: {
        height: 50,
        width: Dimensions.get('window').width - 120,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#a020f0',
        marginTop: 10,
        borderRadius: 12
      },
      text: {
        color: '#eee',
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
        fontWeight: 'bold'
      }
    })
  }
}
