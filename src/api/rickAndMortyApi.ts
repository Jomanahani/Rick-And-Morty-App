import axios from "axios";
import { CharactersResponse, Character, Episode } from "../types";

const BASE_URL = "https://rickandmortyapi.com/api";

export const fetchCharacters = async (): Promise<CharactersResponse> => {
  const { data } = await axios.get(`${BASE_URL}/character`);
  return data;
};

export const fetchCharacterById = async (id: number): Promise<Character> => {
  const { data } = await axios.get(`${BASE_URL}/character/${id}`);
  return data;
};

export const fetchEpisodes = async (ids: number[]): Promise<Episode[]> => {
  if (ids.length === 0) return [];

  const { data } = await axios.get(`${BASE_URL}/episode/${ids.join(",")}`);

  return Array.isArray(data) ? data : [data]; 
};
   