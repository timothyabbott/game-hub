import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
    id: number;
    name: string;
    background_image:string
  }
  
  interface FetchGameResponse {
    count: number;
    results: Game[];
  }

const useGames = ()=>{

    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => { 
      const controller = new AbortController();
      apiClient
        .get<FetchGameResponse>("/games",{signal:controller.signal})
        .then((result) => setGames(result.data.results))
        .catch((error) => {
            if (error instanceof CanceledError) return;
            setError(error.message);
        })
        return () =>controller.abort()
    },[]);

    return{games, error}
}

export default useGames