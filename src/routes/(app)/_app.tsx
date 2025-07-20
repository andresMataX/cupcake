import { TopBar } from '@/components/common'
import { SignedIn } from '@clerk/clerk-react'
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
    <SignedIn>
      <main className="magicpattern flex min-h-dvh flex-col">
        <TopBar />

        <div className="container mx-auto flex flex-1 flex-col gap-6 p-4 md:px-0">
          <Outlet />
        </div>
      </main>
    </SignedIn>
  )
}
