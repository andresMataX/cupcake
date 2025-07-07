import { SplashScreen } from '@/components/common'
import { ClerkLoaded, ClerkLoading, useUser } from '@clerk/clerk-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import type { FC } from 'react'
import { routeTree } from './routeTree.gen'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      staleTime: Infinity,
      gcTime: Infinity,
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
