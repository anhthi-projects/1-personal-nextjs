import { toastIns } from "@anhthi-projects/usy-ui";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const createRtkFetchBase = () =>
  fetchBaseQuery({
    baseUrl: "http://localhost:4000/api",
    prepareHeaders: (headers) => {
      return headers;
    },
    responseHandler: (response) => {
      return response.json();
    },
  });

/**
 * Create Base Fetch
 */

export const createPureFetchBase = async <T>(
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
  } catch (error: any) {
    return {
      error,
    };
  }
};
