import { TopBar } from '@/components/common'
import { createFileRoute, redirect } from '@tanstack/react-router'

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
    <main className="">
      <TopBar />
    </main>
  )
}
