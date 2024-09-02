import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { useAtomValue } from 'jotai'

import Footer from '@/components/footer/footer'
import NavBar from '@/components/nav-bar/nav-bar'
import themeAtom from '@/global-states/theme-atom'

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => <div>Not Found</div>
})

function RootComponent() {
  const theme = useAtomValue(themeAtom)
  const isDark = theme === 'dark'
  const darkThemeClass = isDark ? 'dark' : ''

  return (
    <div
      className={`flex flex-col min-h-screen ${darkThemeClass} bg-slate-200 dark:bg-slate-950 transition-all`}
    >
      <NavBar />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />

      <ReactQueryDevtools buttonPosition="top-right" />
      <TanStackRouterDevtools />
    </div>
  )
}
