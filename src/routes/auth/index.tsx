import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/')({
  beforeLoad: ({ context }) => {
    const user = context.user

    if (user.isSignedIn) {
      throw redirect({ to: '/', replace: true })
    }
  },
})
