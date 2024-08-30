import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { useAtom } from 'jotai'
import { MoonStar, Sun } from 'lucide-react'

import Button from '@/components/ui/button'
import themeAtom from '@/global-states/theme-atom'

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => <div>Not Found</div>
})

function RootComponent() {
  const [theme, setTheme] = useAtom(themeAtom)
  const isDark = theme === 'dark'
  const darkThemeClass = isDark ? 'dark' : ''

  const changeTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <main className={`${darkThemeClass} dark:bg-slate-950 h-full transition-all`}>
      <Button className="" icon onClick={changeTheme} rounded>
        {isDark ? <MoonStar size={18} /> : <Sun size={18} />}
      </Button>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </main>
  )
}
