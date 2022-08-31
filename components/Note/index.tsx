import { StackNavigationProp } from '@react-navigation/stack'
import { useLayoutEffect } from 'react'
import { useTheme } from '../../context/ThemeProvider'
import useColorsTheme from '../../hooks/useColorsTheme'
import { RootStackParamList } from '../../screens/Manager'
import MarkdownConverter from '../MarkDownConverter'
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native'
import { View } from 'react-native'

export type noteScreenProp = StackNavigationProp<RootStackParamList, 'Note'>

export default function Note () {
  const theme = useTheme()
  const colors = useColorsTheme(theme)
  const route = useRoute<RouteProp<RootStackParamList, 'Note'>>()
  const navigation = useNavigation<noteScreenProp>()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.title,
      headerStyle: {
        backgroundColor: colors.background
      },
      headerTintColor: colors.text
    })
  }, [colors, route])

  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.background,
      padding: 10
    }}>
      <MarkdownConverter text={route.params.content}/>
    </View>
  )
}
