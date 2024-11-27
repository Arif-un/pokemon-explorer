import { createLazyFileRoute } from '@tanstack/react-router'

import PokemonDetails from '@/pages/pokemon-details'

export const Route = createLazyFileRoute('/pokemon-explorer/pokemon-details/$name')({
  component: PokemonDetails,
  notFoundComponent: () => <div>Not Found</div>
})
