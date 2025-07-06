import type { useUser } from '@clerk/clerk-react'
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'

interface Context {
  user: ReturnType<typeof useUser>
}

export const Route = createRootRouteWithContext<Context>()({
  component: () => (
    <>
      <Outlet />
    </>
  ),
})
