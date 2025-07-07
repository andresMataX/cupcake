import { SplashScreen } from '@/components/common'
import { ClerkLoaded, ClerkLoading, useUser } from '@clerk/clerk-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import type { FC } from 'react'
import { toast } from 'sonner'
import { DEFAULT_TOAST_ID } from './lib'
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
        toast.loading('Loading...', { id: DEFAULT_TOAST_ID })
      },

      onError: () => {
        toast.error('An error occurred while processing your request.', {
          id: DEFAULT_TOAST_ID,
        })
      },
    },
  },
})

const router = createRouter({
  routeTree,
  context: { user: undefined!, queryClient },
  defaultPreload: 'intent',
  defaultPreloadStaleTime: Infinity,
  notFoundMode: 'root',
})

interface Props {}

export const App: FC<Props> = () => {
  const user = useUser()

  return (
    <>
      <ClerkLoading>
        <SplashScreen />
      </ClerkLoading>

      <ClerkLoaded>
        <QueryClientProvider client={queryClient}>
          <RouterProvider
            router={router}
            context={{ user }}
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
