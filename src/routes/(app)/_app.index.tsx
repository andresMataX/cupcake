import { MissingBirthday } from '@/components/(app)/home'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/_app/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <MissingBirthday />
    </div>
  )
}
