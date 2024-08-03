import { fetchBaseQuery } from "@reduxjs/toolkit/query";

import { SessionStorageKeys } from "@/constants/app";
import { AppException } from "@/types/exception";

export const createRtkFetchBase = () =>
  fetchBaseQuery({
    baseUrl: "http://localhost:4000/api",
    prepareHeaders: (headers) => {
      headers.set("Accept", "application/json");

      const accessToken = sessionStorage.getItem(
        SessionStorageKeys.ACCESS_TOKEN
      );
      accessToken && headers.set("Authorization", `Bearer ${accessToken}`);

      return headers;
    },
    responseHandler: (response) => {
      return response.json();
    },
  });

/**
 * Create Base Fetch
 */

type NativeFetchBaseResult<T> = {
  data?: T;
  error?: AppException;
};

export const createNativeFetchBase = async <T>(
  path: string
): Promise<NativeFetchBaseResult<T>> => {
  try {
    const res = await fetch(`${process.env.SERVICE_URL}/${path}`);

    return {
      data: await res.json(),
    };
  } catch (error: any) {
    return {
      error,
    };
  }
};
