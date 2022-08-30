import AsyncStorage from '@react-native-async-storage/async-storage'

export async function getThemeMode () {
  const theme = await AsyncStorage.getItem('theme')
  return theme
}

export async function setThemeMode (theme: string) {
  await AsyncStorage.setItem('theme', theme)
}
