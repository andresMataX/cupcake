import { TopBar } from '@/components/common'
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/_app')({
  component: RouteComponent,
  beforeLoad: ({ context }) => {
    const user = context.user

    if (!user.isSignedIn) {
      throw redirect({ to: '/auth', replace: true })
    }
  },
})

function RouteComponent() {
  return (
    <main className="flex min-h-dvh flex-col">
      <TopBar />

      <div className="container mx-auto flex-1 p-4 md:px-0">
        <Outlet />
      </div>
    </main>
  )
}
