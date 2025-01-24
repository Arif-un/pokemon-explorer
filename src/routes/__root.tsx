import { useEffect } from 'react'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Outlet, ScrollRestoration, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { useAtomValue } from 'jotai'

import Footer from '@/components/footer'
import NavBar from '@/components/nav-bar/nav-bar'
import ScrollToTop from '@/components/scroll-to-top-button'
import themeAtom from '@/global-states/theme-atom'

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => <div className="bg-red-950 rounded-md ">Not Found</div>
})

function RootComponent() {
  const theme = useAtomValue(themeAtom)
  const isDark = theme === 'dark'
  const darkThemeClass = isDark ? 'dark' : ''

  useEffect(() => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]')
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', isDark ? '#020617' : '#e1e7ef')
    }
  }, [isDark])

  return (
    <div
      className={`flex flex-col items-center min-h-screen bg-image ${darkThemeClass} bg-slate-200 dark:bg-slate-950 transition-all`}
    >
      <ScrollRestoration getKey={location => location.pathname} />
      <NavBar />

      <main className="flex-grow w-5/6 mt-32 sm:mt-20 md:mt-20">
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

export default RootComponent
