import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/(app)/_app/voting-room/$id/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(app)/_app/voting-room/"!</div>
}
