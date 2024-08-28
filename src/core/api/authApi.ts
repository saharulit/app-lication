import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../entities/user/user';

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://app-lication-server.vercel.app/api/',
    credentials: 'include', // Ensures cookies are sent with requests
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<User, { firstName: string; lastName: string; email: string; password: string }>({
      query: (user) => ({
        url: 'auth/register',
        method: 'POST',
        body: user,
      }),
    }),

    loginUser: builder.mutation<User, { email: string; password: string }>({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),

    // You can add more endpoints here as needed
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = authApi;
