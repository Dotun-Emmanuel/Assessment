import { useRouter } from "next/router";
import { useCallback } from "react";
import { Cookies } from "typescript-cookie";
import { COOKIE_STORAGE_KEY } from "./fetch";

export function useLogout() {
  const router = useRouter();

  return useCallback(() => {
    localStorage.clear();
    Cookies.remove(COOKIE_STORAGE_KEY);
    router.push("/login");
  }, [router]);
}
