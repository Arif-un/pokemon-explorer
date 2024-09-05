import bug from '@/assets/type-icons/bug.svg'
import dark from '@/assets/type-icons/dark.svg'
import dragon from '@/assets/type-icons/dragon.svg'
import electric from '@/assets/type-icons/electric.svg'
import fairy from '@/assets/type-icons/fairy.svg'
import fighting from '@/assets/type-icons/fighting.svg'
import fire from '@/assets/type-icons/fire.svg'
import flying from '@/assets/type-icons/flying.svg'
import ghost from '@/assets/type-icons/ghost.svg'
import grass from '@/assets/type-icons/grass.svg'
import ground from '@/assets/type-icons/ground.svg'
import ice from '@/assets/type-icons/ice.svg'
import normal from '@/assets/type-icons/normal.svg'
import poison from '@/assets/type-icons/poison.svg'
import psychic from '@/assets/type-icons/psychic.svg'
import rock from '@/assets/type-icons/rock.svg'
import steel from '@/assets/type-icons/steel.svg'
import water from '@/assets/type-icons/water.svg'

export const DEFAULT_POKEMON_FETCH_LIMIT = 20
export const DEFAULT_POKEMON_FETCH_OFFSET = 0

export const TYPE_ICONS = {
  bug,
  dark,
  dragon,
  electric,
  fairy,
  fighting,
  fire,
  flying,
  ghost,
  grass,
  ground,
  ice,
  normal,
  poison,
  psychic,
  rock,
  steel,
  water
}

export const TYPE_COLORS = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD'
}

export type PokemonType = keyof typeof TYPE_COLORS

export const POKEMON_STATS = {
  hp: { max: 255, color: '#ff0000' },
  attack: { max: 190, color: '#ff0097' },
  defense: { max: 250, color: '#11e800' },
  'special-attack': { max: 194, color: '#ff4d00' },
  'special-defense': { max: 250, color: '#383bff' },
  speed: { max: 200, color: '#00a9ff' }
}
