import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../entities/user/user';
import { config } from '../../config';

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: config.SERVER_BASE_URL,
    credentials: 'include', // Ensures cookies are sent with requests
  }),
  endpoints: (builder) => ({
    register: builder.mutation<
      User,
      { firstName: string; lastName: string; email: string; password: string }
    >({
      query: (user) => ({
        url: 'auth/register',
        method: 'POST',
        body: user,
      }),
    }),

    login: builder.mutation<User, { email: string; password: string }>({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: 'auth/logout',
        method: 'POST',
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation } =
  authApi;
