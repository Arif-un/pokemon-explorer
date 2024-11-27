import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
  loader: () => redirect({ to: '/pokemon-explorer', throw: true })
})

function RouteComponent() {
  return redirect({ to: '/pokemon-explorer' })
}
