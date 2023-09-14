import { QueryKey, useQuery } from "@tanstack/react-query";
import { getter } from "./fetch";
import { AxiosError } from "axios";

interface FetchProps {
  url: string;
  queryKey?: QueryKey;
  query?: Record<string, unknown>;
}

export function useFetch({ url, queryKey, query = {} }: FetchProps) {
  return useQuery({
    queryKey: queryKey || [url, ...Object.values(query)],
    queryFn: () =>
      getter(`${url}`, query)
        .then((resp) => {
          return resp?.data;
        })
        .catch((error: AxiosError) => {
          // error.response?.status === 401 && signout()
          return { error: error?.message || "Error fetching data" };
        }),
    enabled: url ? true : false,
  });
}
