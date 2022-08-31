import { Text, TouchableOpacity } from 'react-native'
import { partialINote } from '../../models/entities'
import Styles from './Styles'
import { useTheme } from '../../context/ThemeProvider'
import useColorsTheme from '../../hooks/useColorsTheme'
import { MaterialCommunityIcons } from '@expo/vector-icons'

interface Props extends partialINote {
  onPress: () => void
  _id: string
  title: string
}

export default function NoteItem (props: Props) {
  const styles = Styles()

  const theme = useTheme()
  const colors = useColorsTheme(theme)

  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <MaterialCommunityIcons name="note-text" size={24}color={colors.text} />
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  )
}
