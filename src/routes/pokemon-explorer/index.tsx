import { createFileRoute } from '@tanstack/react-router'

import Home from '@/pages/home'
import { QueryParamsSchema } from '@/validations/query-params-validation'

export const Route = createFileRoute('/pokemon-explorer/')({
  component: Home,
  validateSearch: QueryParamsSchema
})
