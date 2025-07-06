import { SignIn } from '@clerk/clerk-react'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/auth/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="bg-base-100 flex h-screen flex-col items-center justify-center gap-8 p-2">
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-3xl font-extrabold">Welcome to Cupcake!</h1>

        <h1 className="text-lg">Please sign in to continue.</h1>
      </div>

      <SignIn />
    </main>
  )
}
