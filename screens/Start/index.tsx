import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Folder from '../../components/Folder'
import FolderList from '../../components/FolderList'
import Note from '../../components/Note'
import NoteList from '../../components/NoteList'

const Stack = createNativeStackNavigator()
export default function Start () {
  return (
    <Stack.Group>
      <Stack.Screen name='FolderList' component={FolderList} />
      <Stack.Screen name='NoteList' component={NoteList} />
      <Stack.Screen name='Folder' component={Folder} />
      <Stack.Screen name='Note' component={Note} />
    </Stack.Group>
  )
}
