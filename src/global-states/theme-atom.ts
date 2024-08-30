import { atomWithStorage } from 'jotai/utils'

type Theme = 'light' | 'dark'

const themeAtom = atomWithStorage<Theme>('theme', 'light')

export default themeAtom
