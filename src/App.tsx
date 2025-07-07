import { SplashScreen } from '@/components/common'
import { ClerkLoaded, ClerkLoading, useUser } from '@clerk/clerk-react'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import type { FC } from 'react'
import { routeTree } from './routeTree.gen'

const router = createRouter({
  routeTree,
  context: { user: undefined! },
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
        <RouterProvider
          router={router}
          context={{ user }}
        />
      </ClerkLoaded>
    </>
  )
}

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

declare global {
  interface Window {
    Clerk: unknown
  }
}
