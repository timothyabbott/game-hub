import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}
// the ? here makes the requestConfig optional
const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setGenres] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
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
    },
    // means if we have deps spread them, =otherwise use an empty array
    deps ? [...deps] : []
  );
  return { data, error, isLoading };
};

export default useData;
