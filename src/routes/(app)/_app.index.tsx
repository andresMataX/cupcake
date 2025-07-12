import {
  Birthdays,
  MissingBirthday,
  UpcomingBirthdays,
} from '@/components/(app)/home'
import { birthdaysQueryOptions } from '@/hooks/birthdays'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/_app/')({
  component: RouteComponent,
  loader: async ({ context }) => {
    const { auth, queryClient } = context

    await queryClient.ensureQueryData(birthdaysQueryOptions(auth.getToken))
  },
})

function RouteComponent() {
  return (
    <>
      <MissingBirthday />

      <UpcomingBirthdays />

      <Birthdays />
    </>
  )
}
