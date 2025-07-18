import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/_app/voting-room/$id/')({
  beforeLoad: async ({ params, context }) => {
    const { id } = params

    const { user } = context.user

    if (user?.id === id) {
      throw redirect({ to: '/', replace: true })
    }
  },
})
