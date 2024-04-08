import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myAPi = createApi({
  reducerPath: "posts",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], string>({ query: () => "posts" }),
  }),
});

export const { useGetPostsQuery } = myAPi;
