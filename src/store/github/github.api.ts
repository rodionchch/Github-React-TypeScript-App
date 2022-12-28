import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ServerResponse, IUser, IRepos } from "models/models";

export const githubApi = createApi({
  reducerPath: "github/api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com" }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    searchUsers: build.query<IUser[], string>({
      query: (search: string) => ({
        url: `search/users`,
        params: {
          q: search,
          per_page: 20,
        },
      }),
      transformResponse: (response: ServerResponse<IUser>) => response.items,
    }),
    getUserRepos: build.query<IRepos[], string>({
      query: (username: string) => ({
        url: `users/${username}/repos`,
      }),
    }),
    createUser: build.mutation<any, void>({
      query: () => "",
    }),
  }),
});

export const { useSearchUsersQuery, useGetUserReposQuery } = githubApi;
