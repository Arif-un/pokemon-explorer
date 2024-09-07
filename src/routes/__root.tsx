import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Outlet, ScrollRestoration, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { useAtomValue } from 'jotai'

import Footer from '@/components/footer/'
import NavBar from '@/components/nav-bar/nav-bar'
import ScrollToTop from '@/components/scroll-to-top-button/scroll-to-top-button'
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
      className={`flex flex-col items-center min-h-screen bg-image ${darkThemeClass} bg-slate-200 dark:bg-slate-950 transition-all`}
    >
      <ScrollRestoration getKey={location => location.pathname} />
      <NavBar />

      <main className="flex-grow w-5/6">
        <Outlet />
      </main>

      <ScrollToTop />
      <Footer />

      {import.meta.env.MODE === 'development' && (
        <>
          <ReactQueryDevtools buttonPosition="top-right" />
          <TanStackRouterDevtools />
        </>
      )}
    </div>
  )
}
