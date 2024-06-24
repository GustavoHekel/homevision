import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

export const base = createApi({
  reducerPath: 'api',
  baseQuery: retry(fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_API_ENDPOINT
  }), { maxRetries: 5 }),
  endpoints: () => ({})
});
