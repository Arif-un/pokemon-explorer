import { useAtom } from 'jotai'
import { MoonStar, Sun } from 'lucide-react'

import pokemonLogo from '@/assets/pokemon-logo.png'
import Button from '@/components/ui/button'
import themeAtom from '@/global-states/theme-atom'

export default function NavBar() {
  const [theme, setTheme] = useAtom(themeAtom)
  const isDark = theme === 'dark'

  const changeTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <nav className="container mx-auto mt-3 inset-0 flex justify-between items-center border  border-slate-200 dark:border-slate-800 px-10 h-28 rounded-3xl backdrop-blur-xl fixed z-50">
      <div className="w-1/3"></div>

      <div className="w-1/3 flex justify-center">
        <img src={pokemonLogo} alt="Pokemon logo" className="w-60" width={240} height={89} />
      </div>

      <div className="w-1/3 flex justify-end space-x-4">
        <Button
          className="bg-transparent dark:bg-transparent"
          icon
          onClick={changeTheme}
          rounded
          title="Toggle dark theme"
        >
          {isDark ? <MoonStar size={18} /> : <Sun size={18} />}
        </Button>
      </div>
    </nav>
  )
}
