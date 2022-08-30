import { KeyboardTypeOptions, TextInput } from 'react-native'
import { useTheme } from '../../context/ThemeProvider'
import useColorsTheme from '../../hooks/useColorsTheme'
import Styles from './Styles'

interface Props {
  onChange: (e: string) => void;
  value: string;
  placeholder: string;
  type: KeyboardTypeOptions;
  secureTextEntry?: boolean;
}

export default function InputForm (props: Props) {
  const styles = Styles()
  const theme = useTheme()

  const colors = useColorsTheme(theme)

  return (
    <TextInput
      style={styles.input}
      onChangeText={props.onChange}
      value={props.value}
      placeholder={props.placeholder}
      autoCapitalize='none'
      keyboardType={`${props.type}` || 'default'}
      secureTextEntry={props.secureTextEntry}
      placeholderTextColor={colors.text}
    />
  )
}
