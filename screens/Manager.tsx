import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import Auth from './Auth'
import { useSession } from '../context/SessionProvider'
import FolderList from '../components/FolderList'
import Folder from '../components/Folder'
import Note from '../components/Note'
import { useTheme } from '../context/ThemeProvider'
import useColorsTheme from '../hooks/useColorsTheme'
import { StatusBar } from 'expo-status-bar'

export type RootStackParamList = {
  FolderList: undefined;
  Folder: { folderId: string, title: string };
  Note: { title: string, content: string };
  Auth: undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function Manager () {
  const theme = useTheme()
  const colors = useColorsTheme(theme)

  const session = useSession()
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.background} style={theme ? 'light' : 'dark'}/>
      <Stack.Navigator>
        {
          session.token
            ? (
              <>
                <Stack.Screen
                  options={{ headerShadowVisible: false }}
                  name='FolderList'
                  component={FolderList}
                />
                <Stack.Screen
                  options={{ headerShadowVisible: false }}
                  name='Folder'
                  component={Folder}
                />
                <Stack.Screen
                  options={{ headerShadowVisible: false }}
                  name='Note'
                  component={Note}
                />
              </>
              )
            : <Stack.Screen name='Auth' component={Auth} />
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}
