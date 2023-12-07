import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenre";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (selectedGenre: Genre | null) =>
  // the selected Genre is passed to the useData hook as a query string.
  useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    // this dependency was added to run the hook(get games) when the selected genre changes
    selectedGenre?.id,
  ]);

export default useGames;
