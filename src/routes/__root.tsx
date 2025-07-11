import type { useAuth, useUser } from '@clerk/clerk-react'
import type { QueryClient } from '@tanstack/react-query'
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { Toaster } from 'sonner'

interface Context {
  queryClient: QueryClient
  user: ReturnType<typeof useUser>
  auth: ReturnType<typeof useAuth>
}

export const Route = createRootRouteWithContext<Context>()({
  component: () => (
    <>
      <Outlet />

      <Toaster
        position="bottom-center"
        richColors
      />
    </>
  ),
})
