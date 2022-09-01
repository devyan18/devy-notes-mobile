import { StackNavigationProp } from '@react-navigation/stack'
import { ActivityIndicator, FlatList, RefreshControl, Text, View } from 'react-native'
import { RootStackParamList } from '../../screens/Manager'
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native'
import Styles from './Styles'
import { useLayoutEffect } from 'react'
import { useTheme } from '../../context/ThemeProvider'
import useColorsTheme from '../../hooks/useColorsTheme'
import useNotes from '../../hooks/useNotes'
import NoteItem from '../NoteItem'
import { useQueryClient } from '@tanstack/react-query'

export type folderScreenProp = StackNavigationProp<RootStackParamList, 'Folder'>

export default function Folder () {
  const navigation = useNavigation<folderScreenProp>()
  const route = useRoute<RouteProp<RootStackParamList, 'Folder'>>()
  const styles = Styles()

  const theme = useTheme()
  const colors = useColorsTheme(theme)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.title,
      headerStyle: {
        backgroundColor: colors.background
      },
      headerTintColor: colors.primary
    })
  }, [colors, route])

  const { notes, error, isLoading, isFetching } = useNotes(route.params.folderId)

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

  const queryClient = useQueryClient()

  const handleRefresh = () => {
    queryClient.invalidateQueries(['notes'])
  }

  return (
    <View style={styles.container}>
      {
        isLoading
          ? <ActivityIndicator size='large' color={colors.text} />
          : (
              <FlatList
                refreshControl={<RefreshControl
                  refreshing={isFetching}
                  onRefresh={handleRefresh}
                />}
                data={notes}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                  <NoteItem
                    _id={item._id}
                    title={item.title}
                    onPress={() => handlePressNoteItem(item.content, item.title)}
                  />
                )}
              />
            )
      }

    </View>
  )
}
