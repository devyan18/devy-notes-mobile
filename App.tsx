import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import SessionProvider from './context/SessionProvider'
import ThemeProvider from './context/ThemeProvider'
import Manager from './screens/Manager'

export default function App () {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <ThemeProvider>
          <Manager />
        </ThemeProvider>
      </SessionProvider>
    </QueryClientProvider>
  )
}
