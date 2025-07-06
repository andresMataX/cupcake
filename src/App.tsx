import { ClerkProvider } from '@clerk/clerk-react'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import type { FC } from 'react'
import { routeTree } from './routeTree.gen'

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultPreloadStaleTime: Infinity,
})

interface Props {
  clerk_key: string
}

export const App: FC<Props> = ({ clerk_key }) => {
  return (
    <>
      <ClerkProvider publishableKey={clerk_key} afterSignOutUrl='/'>
        <RouterProvider router={router} />
      </ClerkProvider>
    </>
  )
}

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
