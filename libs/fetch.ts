import { _axios } from "./axios";
import { useRouter } from "next/router";
import { QueryKey, useQuery } from "@tanstack/react-query";
import { getCookie } from "typescript-cookie";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

import { AxiosError } from "axios";

interface FetchProps {
  url: string;
  queryKey?: QueryKey;
  initialData?: any;
}

export const COOKIE_STORAGE_KEY = "snack-house-cookie";

export async function getter(url: string, params: Params) {
  const response = await _axios.get(url, {
    params: params,
    headers: getCookie(COOKIE_STORAGE_KEY)
      ? { Authorization: `Bearer ${getCookie(COOKIE_STORAGE_KEY)}` }
      : {},
  });
  return response;
}

export function useFetch({ url, queryKey, initialData }: FetchProps) {
 
  const { query, isReady } = useRouter();
  const { key } = useGetUrlQuery({ url });

  const spreadQuery = { ...query };
  delete spreadQuery?.count;
  
  return useQuery({
    queryKey: queryKey || key,
    queryFn: () =>
      getter(`${url}`, spreadQuery)
        .then((resp) => {
         
          return resp?.data?.data;
        })
        .catch((error: AxiosError) => {
          // error.response?.status === 401 && signout()
          return { error: error?.message || "Error fetching data" };
        }),
    initialData,
    enabled: url && isReady ? true : false,
  });
}

export function useGetUrlQuery({ url }: { url: string }) {
  const { query } = useRouter();
  const spreadQuery = { ...query };
  delete spreadQuery?.count;

  return { key: [url, ...Object.values(spreadQuery)] };
}
