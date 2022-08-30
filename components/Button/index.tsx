import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import Styles from './Styles'

interface Props {
  onPress: () => void;
  text: string;
  children?: React.ReactNode;
  outline?: boolean;
  type: 'primary' | 'secondary';
  activity?: boolean
}

export default function Button (props: Props) {
  const styles = Styles(props.type)

  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      {props.children}
      <>
        {
          props.activity
            ? <ActivityIndicator size='small' color='#fff'/>
            : <Text style={styles.text}>{props.text}</Text>
        }
      </>
    </TouchableOpacity>
  )
}
