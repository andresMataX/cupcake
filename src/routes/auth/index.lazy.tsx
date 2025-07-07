import { Language } from '@/components/common'
import { m } from '@/paraglide/messages'
import { SignIn } from '@clerk/clerk-react'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/auth/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="bg-base-100 relative flex h-dvh flex-col items-center justify-center gap-8 p-2">
      <div className="absolute top-4 left-[50%]">
        <Language />
      </div>

      <div className="flex flex-col items-center gap-1">
        <h1 className="text-3xl font-extrabold">{m['auth.welcome']()}</h1>

        <h1 className="text-lg">{m['auth.welcome_subtitle']()}</h1>
      </div>

      <SignIn />
    </main>
  )
}
