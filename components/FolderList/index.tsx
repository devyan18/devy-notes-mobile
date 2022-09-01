import { View, FlatList, ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import useFolders from '../../hooks/useFolders'
import FolderItem from '../FolderItem'
import { useTheme } from '../../context/ThemeProvider'
import useColorsTheme from '../../hooks/useColorsTheme'
import Styles from './Styles'
import { useLayoutEffect } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../screens/Manager'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'

export type folderListScreenProp = StackNavigationProp<RootStackParamList, 'FolderList'>

export default function FolderList () {
  const navigation = useNavigation<folderListScreenProp>()

  const styles = Styles()

  const { data, error, isLoading } = useFolders()

  const theme = useTheme()
  const colors = useColorsTheme(theme)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Folders',
      headerStyle: {
        backgroundColor: colors.background
      },
      headerTintColor: colors.primary,
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <AntDesign name="setting" size={24} color={colors.primary}/>
        </TouchableOpacity>
      )
    })
  }, [colors])

  if (error) {
    return (
      <View>
        <Text>Error on get folders</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {
        isLoading
          ? <ActivityIndicator size='large' color={colors.text} />
          : <FlatList
              data={data}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => <FolderItem _id={item._id} title={item.title}/>}
            />
      }
    </View>
  )
}
