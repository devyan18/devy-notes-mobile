import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import Auth from './Auth'
import { useSession } from '../context/SessionProvider'
import Start from './Start'

const Stack = createNativeStackNavigator()

export default function Manager () {
  const session = useSession()

  return (
    <>
    {
      session.token
        ? (
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name="Start" component={Start} />
              </Stack.Navigator>
            </NavigationContainer>
          )
        : <Auth />
    }
    </>
  )
}
