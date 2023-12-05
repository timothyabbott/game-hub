import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Genre {
  id: number;
  name: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controller.signal })
      .then((result) => {
        setLoading(false);
        setGenres(result.data.results);
      })
      .catch((error) => {
        setLoading(false);
        if (error instanceof CanceledError) return;
        setError(error.message);
      });
    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
