import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const createRtkFetchBase = () =>
  fetchBaseQuery({
    baseUrl: "http://localhost:4000/api",
    prepareHeaders: (headers) => {
      headers.set("Accept", "application/json");
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
  error?: any;
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
