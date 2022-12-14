import { useQuery } from '@tanstack/react-query'
import { useSession } from '../context/SessionProvider'
import { getNotes } from '../services/notes.public'

const useNotes = (folderId: string) => {
  const session = useSession()

  const { data, isLoading, error, isFetching } = useQuery(['notes'], () => getNotes(session.token || '', folderId))

  return {
    notes: data,
    isLoading,
    error,
    isFetching
  }
}

export default useNotes
