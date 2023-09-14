import { _axios } from "./axios";
import { AxiosError, AxiosResponse } from "axios";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { getCookie } from "typescript-cookie";
import { COOKIE_STORAGE_KEY } from "./fetch";
import { handleErrorNotification, handleSuccessNotification } from "./toaster";
interface PostProps {
  url: string;
  callback?: (response: AxiosResponse) => void;
  invalidateQuery?: [];
  encryptPayload?: boolean;
}

export async function poster(
  url: string,
  data: Record<string, unknown> | FormData
) {
  const response = await _axios.post(url, data, {
    headers: getCookie(COOKIE_STORAGE_KEY)
      ? { Authorization: `Bearer ${getCookie(COOKIE_STORAGE_KEY)}` }
      : {},
  });
  return response;
}

export function usePost({ url, callback, invalidateQuery }: PostProps) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Record<string, unknown> | FormData) => poster(url, data),
    onSuccess: async (response: AxiosResponse) => {
      const _message = response?.data?.detail;
      handleSuccessNotification({
        message: _message,
        callback: () => callback?.(response),
      });
      invalidateQuery && (await queryClient.invalidateQueries(invalidateQuery));
    },
    onError: (error: AxiosError) => {
      // typescript update needed here
      const _error: any = error?.message;
      const message = handleErrorNotification({
        title: "Error",
        message: _error,
      });
    },
  });
}
