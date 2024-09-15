import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../entities/user/user';
import { config } from '../../config';

const getTokenFromCookie = () => {
  const token = document.cookie
    .split('; ')
    .find((row) => row.startsWith('token='))
    ?.split('=')[1];
  return token;
};

export const jobApi = createApi({
  reducerPath: 'jobApi',
  baseQuery: fetchBaseQuery({
    baseUrl: config.SERVER_BASE_URL,
    prepareHeaders: (headers) => {
      const token = getTokenFromCookie();
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
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
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
