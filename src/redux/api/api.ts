import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myAPi = createApi({
  reducerPath: "myApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], string>({
      query: () => "posts",
      providesTags: ["Posts"],
    }),
    addPosts: builder.mutation<Post, Post>({
      query: (post) => ({
        url: "posts",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Posts"],
    }),
    deletePosts: builder.mutation<void, number>({
      query: (postId) => ({
        url: `posts/${postId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Posts"],
    }),
    updatePosts: builder.mutation<Post, { id: number; post: Post }>({
      query: ({id, post}) => ({
        url: `posts/${id}`,
        method: "PUT",
        body: post,
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useAddPostsMutation,
  useDeletePostsMutation,
  useUpdatePostsMutation,
} = myAPi;
