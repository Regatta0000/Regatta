import { create } from "zustand";
import { getRandomColor } from "../components/utils/ColorUtils";

type ApiResponse<T> = {
  count: number;
  next: string | null;
  prev: string | null;
  results: T;
};

type ApiCharacter = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
};

type ApiSpecies = {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string;
  language: string;
  people: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

type Character = ApiCharacter & {
  backgroundColor: string;
};

type Species = ApiSpecies & {
  backgroundColor: string;
};

interface CharacterStore {
  characters: Character[];
  fetchCharacters: () => Promise<void>;
}

const useCharactersStore = create<CharacterStore>((set) => ({
  characters: [],
  fetchCharacters: async () => {
    try {
      const response = await fetch("https://swapi.dev/api/people/");
      const data: ApiResponse<ApiCharacter[]> = await response.json();

      // const characters: Character[] = [];

      // for (const apiChar of data.results) {
      //   characters.push({ ...apiChar, backgroundColor: getRandomColor() });
      // }

      set({
        characters: data.results.map((apiChar) => {
          return { ...apiChar, backgroundColor: getRandomColor() };
        }),
      });
    } catch (error) {
      console.log("Error", error);
    }
  },
}));

export default useCharactersStore;
