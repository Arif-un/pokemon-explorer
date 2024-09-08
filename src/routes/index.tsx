import { createFileRoute } from '@tanstack/react-router'

import Home from '@/pages/home'
import { QueryParamsSchema } from '@/validations/query-params-validation'

export const Route = createFileRoute('/')({
  component: Home,
  validateSearch: QueryParamsSchema
})
