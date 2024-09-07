import { type QueryKey } from '@tanstack/react-query'

import pokemonPlaceholder from '@/assets/Pokeball.svg'
import { type Pokemon, type PokemonDetailsResponse, type PokemonResponse } from '@/types/Pokemon'

import { POKEMON_STATS, TYPE_COLORS, TYPE_ICONS } from './constants'

export interface Stats {
  name: string
  value: number
  max: number
  color: string
}

export interface PokemonTypes {
  name?: string
  icon?: string
  color?: string
}

export function pickPokemonImage(pokemonDetails: Pokemon | PokemonDetailsResponse) {
  const images = Array.isArray(pokemonDetails?.sprites)
    ? pokemonDetails.sprites[0]?.sprites
    : pokemonDetails?.sprites

  return (
    images?.other?.['official-artwork']?.front_shiny ||
    images?.other?.['official-artwork']?.front_default ||
    images?.other?.dream_world?.front_default ||
    images?.other?.home?.front_shiny ||
    images?.front_shiny ||
    pokemonPlaceholder
  )
}

export function preparePokemonDetails(pokemonDetails: PokemonDetailsResponse) {
  const id = pokemonDetails?.id
  const image = pickPokemonImage(pokemonDetails)
  const types = pokemonDetails?.types?.map<PokemonTypes>(typeInfo => ({
    name: typeInfo?.type?.name,
    icon: typeInfo?.type?.name && TYPE_ICONS[typeInfo.type.name],
    color: typeInfo?.type?.name && TYPE_COLORS[typeInfo.type.name]
  }))

  const abilities = pokemonDetails?.abilities?.map(abilityInfo => abilityInfo?.ability?.name)

  const baseStats = pokemonDetails?.stats?.reduce<Stats[]>((acc, statInfo) => {
    if (statInfo?.stat?.name) {
      const statName = statInfo.stat.name
      acc.push({
        name: statName,
        value: statInfo.base_stat || 0,
        max: POKEMON_STATS[statName].max,
        color: POKEMON_STATS[statName].color
      })
    }
    return acc
  }, [])

  return { id, image, types, abilities, baseStats }
}

export function transformTypeFromCacheData(data: { pokemon_v2_type: { name: string } }[]) {
  return data.map(item => ({
    type: {
      name: item.pokemon_v2_type.name
    }
  }))
}

function findPokemonInCache(
  queriesData: [QueryKey, PokemonResponse | undefined][],
  pokemonName: string
) {
  for (const queryData of queriesData) {
    const cachedPokemon = queryData?.[1]?.pokemons?.find(pokemon => pokemon.name === pokemonName)
    if (cachedPokemon) return cachedPokemon
  }
  return null
}

export function preparePokemonDetailsInitialData(
  name: string,
  cachedPokemonQueries: [QueryKey, PokemonResponse | undefined][]
) {
  const cachedPokemon = findPokemonInCache(cachedPokemonQueries, name)

  if (!cachedPokemon) return

  const { sprites, types } = cachedPokemon
  const transformedSprites = sprites?.[0]?.sprites || null
  const transformedTypes = transformTypeFromCacheData(types)

  return {
    sprites: transformedSprites,
    types: transformedTypes
  } as PokemonDetailsResponse
}
