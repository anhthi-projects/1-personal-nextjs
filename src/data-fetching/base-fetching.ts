import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const createBaseQuery = () =>
  fetchBaseQuery({
    baseUrl: process.env.SERVICE_URL,
    prepareHeaders: (headers) => {
      return headers;
    },
  });

/**
 * Create Base Fetch
 */

export const createBaseFetch = async <T>(
  path: string
): Promise<{
  data?: T;
  error?: any;
}> => {
  try {
    const res = await fetch(`${process.env.SERVICE_URL}/${path}`);

    return {
      data: await res.json(),
    };
  } catch (error) {
    return {
      error,
    };
  }
};
