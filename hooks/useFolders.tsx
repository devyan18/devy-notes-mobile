import { useQuery } from '@tanstack/react-query'
import { useSession } from '../context/SessionProvider'
import { getFolders } from '../services/folders.public'

const useFolders = () => {
  const session = useSession()

  const { data, isLoading, error } = useQuery(['folders'], () => getFolders(session.token || ''))

  return {
    data,
    isLoading,
    error
  }
}

export default useFolders
