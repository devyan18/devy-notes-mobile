import { TouchableOpacity, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useTheme } from '../../context/ThemeProvider'
import useColorsTheme from '../../hooks/useColorsTheme'
import { useNavigation } from '@react-navigation/native'
import { folderListScreenProp } from '../FolderList'

import Styles from './Styles'

interface Props {
  _id: string
  title: string
}

export default function FolderItem (props: Props) {
  const navigation = useNavigation<folderListScreenProp>()

  const styles = Styles()

  const theme = useTheme()
  const colors = useColorsTheme(theme)

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Folder', {
        folderId: props._id,
        title: props.title
      })}>
      <AntDesign name="folder1" size={24} color={colors.text} />
      <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  )
}
