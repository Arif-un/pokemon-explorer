import { type PokemonType } from '@/utils/constants'

export interface PokemonTypeResponse {
  pokemon_v2_type: {
    name: string
  }[]
}

export interface PokemonResponse {
  pokemon_aggregate: PokemonAggregate
  pokemons: Pokemon[]
}

export interface PokemonDetailsResponse {
  abilities?: Ability[]
  base_experience?: number
  cries?: Cries
  forms?: Species[]
  game_indices?: GameIndex[]
  height?: number
  held_items?: HeldItem[]
  id?: number
  is_default?: boolean
  location_area_encounters?: string
  moves?: Move[]
  name?: string
  order?: number
  past_abilities?: unknown[]
  past_types?: unknown[]
  species?: Species
  sprites?: Sprites
  stats?: Stat[]
  types?: Type[]
  weight?: number
}

export interface Ability {
  ability: {
    name: string
    url: string
  }
  is_hidden?: boolean
  slot?: number
}

export interface Species {
  name?: 'hp' | 'attack' | 'defense' | 'special-attack' | 'special-defense' | 'speed'
  url?: string
}

export interface Cries {
  latest?: string
  legacy?: string
}

export interface GameIndex {
  game_index?: number
  version?: Species
}

export interface HeldItem {
  item?: Species
  version_details?: VersionDetail[]
}

export interface VersionDetail {
  rarity?: number
  version?: Species
}

export interface Move {
  move?: Species
  version_group_details?: VersionGroupDetail[]
}

export interface VersionGroupDetail {
  level_learned_at?: number
  move_learn_method?: Species
  version_group?: Species
}

export interface GenerationV {
  'black-white'?: Sprites
}

export interface GenerationIv {
  'diamond-pearl'?: Sprites
  'heartgold-soulsilver'?: Sprites
  platinum?: Sprites
}

export interface Versions {
  'generation-i'?: GenerationI
  'generation-ii'?: GenerationIi
  'generation-iii'?: GenerationIii
  'generation-iv'?: GenerationIv
  'generation-v'?: GenerationV
  'generation-vi'?: Record<string, Home>
  'generation-vii'?: GenerationVii
  'generation-viii'?: GenerationViii
}

export interface Other {
  dream_world?: DreamWorld
  home?: Home
  'official-artwork'?: OfficialArtwork
  showdown?: Sprites
}

export interface Sprites {
  back_default?: string
  back_female?: string
  back_shiny?: string
  back_shiny_female?: null | string
  front_default?: string
  front_female?: string
  front_shiny?: string
  front_shiny_female?: string
  other?: Other
  versions?: Versions
  animated?: Sprites
}

export interface GenerationI {
  'red-blue'?: RedBlue
  yellow?: RedBlue
}

export interface RedBlue {
  back_default?: string
  back_gray?: string
  back_transparent?: string
  front_default?: string
  front_gray?: string
  front_transparent?: string
}

export interface GenerationIi {
  crystal?: Crystal
  gold?: Gold
  silver?: Gold
}

export interface Crystal {
  back_default?: string
  back_shiny?: string
  back_shiny_transparent?: string
  back_transparent?: string
  front_default?: string
  front_shiny?: string
  front_shiny_transparent?: string
  front_transparent?: string
}

export interface Gold {
  back_default?: string
  back_shiny?: string
  front_default?: string
  front_shiny?: string
  front_transparent?: string
}

export interface GenerationIii {
  emerald?: OfficialArtwork
  'firered-leafgreen'?: Gold
  'ruby-sapphire'?: Gold
}

export interface OfficialArtwork {
  front_default?: string
  front_shiny?: string
}

export interface Home {
  front_default?: string
  front_female?: string
  front_shiny?: string
  front_shiny_female?: string
}

export interface GenerationVii {
  icons?: DreamWorld
  'ultra-sun-ultra-moon'?: Home
}

export interface DreamWorld {
  front_default?: string
  front_female?: null | string
}

export interface GenerationViii {
  icons?: DreamWorld
}

export interface Stat {
  base_stat?: number
  effort?: number
  stat?: Species
}

export interface Type {
  slot?: number
  type?: {
    name?: PokemonType
    url?: string
  }
}

export interface TypeV2 {
  pokemon_v2_type: PokemonV2Type
}

export interface PokemonV2Type {
  name: string
}

export interface PokemonAggregate {
  aggregate: Aggregate
}

export interface Aggregate {
  count: number
}

export interface Pokemon {
  name: string
  sprites: Sprite[]
  types: TypeV2[]
}

export interface Sprite {
  sprites: Sprites
}
