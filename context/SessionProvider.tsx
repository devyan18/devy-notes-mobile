import { createContext, useState, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { IUser } from '../models/entities'
import { getUser } from '../services/auth.public'

interface ISession {
  token: string | null,
  user: IUser | null
}

interface ContextProps {
  session: ISession,
  setSession: (session: ISession) => void
}

const SessionContext = createContext<ContextProps>({
  session: {
    token: null,
    user: null
  },
  setSession: (session: ISession) => {}
})

interface Props {
  children: React.ReactNode
}

function SessionProvider (props: Props) {
  const getToken = async () => {
    const token = await AsyncStorage.getItem('token')
    return token
  }

  const setToken = (token: string) => {
    AsyncStorage.setItem('token', token)
  }

  const [session, setSession] = useState<ISession>({
    token: null,
    user: null
  })
  // const user = useUser(session.token)

  useEffect(() => {
    getToken().then(token => {
      if (token) {
        setSession({
          token,
          user: null
        })
      }
    })
  }, [])

  useEffect(() => {
    if (session.token) {
      setToken(session.token)
      setSession({
        ...session,
        user: null
      })

      getUser(session.token).then(user => {
        setSession({
          ...session,
          user
        })
      })
    }
  }, [session])

  //

  return (
    <SessionContext.Provider value={{ session, setSession }}>
      {props.children}
    </SessionContext.Provider>
  )
}

const useSession = () => useContext(SessionContext).session
const useSetSession = () => useContext(SessionContext).setSession

export { useSession, useSetSession }
export default SessionProvider
