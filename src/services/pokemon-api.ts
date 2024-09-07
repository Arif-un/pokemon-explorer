import axios from 'redaxios'

import { type PokemonDetailsResponse } from '@/types/Pokemon'
import { type PokemonSpecies } from '@/types/Pokemon-Species'

const BASE_URL = 'https://pokeapi.co/api/v2'

export const fetchPokemonDetails = async (name: string) => {
  return axios.get<PokemonDetailsResponse>(`${BASE_URL}/pokemon/${name}`).then(res => res.data)
}

export const fetchPokemonSpecies = async (name: string) => {
  return axios.get<PokemonSpecies>(`${BASE_URL}/pokemon-species/${name}`).then(res => res.data)
}
