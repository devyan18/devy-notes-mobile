import { StackNavigationProp } from '@react-navigation/stack'
import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import { RootStackParamList } from '../../screens/Manager'
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native'
import Styles from './Styles'
import { useLayoutEffect } from 'react'
import { useTheme } from '../../context/ThemeProvider'
import useColorsTheme from '../../hooks/useColorsTheme'
import useNotes from '../../hooks/useNotes'
import NoteItem from '../NoteItem'

export type folderScreenProp = StackNavigationProp<RootStackParamList, 'Folder'>

export default function Folder () {
  const navigation = useNavigation<folderScreenProp>()
  const route = useRoute<RouteProp<RootStackParamList, 'Folder'>>()
  const styles = Styles()

  const theme = useTheme()
  const colors = useColorsTheme(theme)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params?.title,
      headerStyle: {
        backgroundColor: colors.background
      },
      headerTintColor: colors.text
    })
  }, [colors, route])

  const { notes, error, isLoading } = useNotes(route.params?.folderId ?? '')

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error on get notes</Text>
      </View>
    )
  }

  const handlePressNoteItem = (content: string, title: string) => {
    navigation.navigate('Note', { title, content })
  }

  return (
    <View style={styles.container}>
      {
        isLoading
          ? <ActivityIndicator size='large' color={colors.text} />
          : (
              <FlatList
                data={notes}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => <NoteItem _id={item._id} title={item.title} onPress={() => handlePressNoteItem(item.content, item.title)} />}
              />
            )
      }

    </View>
  )
}
