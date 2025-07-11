import { LoadingPage, SplashScreen } from '@/components/common'
import { ClerkLoaded, ClerkLoading, useAuth, useUser } from '@clerk/clerk-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import type { FC } from 'react'
import { toast } from 'sonner'
import { DEFAULT_TOAST_ID } from './lib'
import { m } from './paraglide/messages'
import { routeTree } from './routeTree.gen'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      staleTime: Infinity,
      gcTime: Infinity,
    },
    mutations: {
      onMutate: () => {
        toast.loading(m['common.loading'](), { id: DEFAULT_TOAST_ID })
      },

      onError: () => {
        toast.error(m['common.error'](), {
          id: DEFAULT_TOAST_ID,
        })
      },
    },
  },
})

const router = createRouter({
  routeTree,
  context: { auth: undefined!, user: undefined!, queryClient },
  notFoundMode: 'root',
  defaultPendingMs: 50,
  defaultPreload: 'intent',
  defaultPreloadStaleTime: Infinity,
  defaultPendingComponent: LoadingPage,
})

interface Props {}

export const App: FC<Props> = () => {
  const user = useUser()
  const auth = useAuth()

  return (
    <>
      <ClerkLoading>
        <SplashScreen />
      </ClerkLoading>

      <ClerkLoaded>
        <QueryClientProvider client={queryClient}>
          <RouterProvider
            router={router}
            context={{ user, auth }}
          />
        </QueryClientProvider>
      </ClerkLoaded>
    </>
  )
}

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
