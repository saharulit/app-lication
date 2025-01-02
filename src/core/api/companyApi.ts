import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from '../../config';
import { Company } from '../entities/company/company';

export const companyApi = createApi({
  reducerPath: 'companies',
  baseQuery: fetchBaseQuery({
    baseUrl: config.SERVER_BASE_URL,
    credentials: 'include', // Ensures cookies are sent with requests
  }),
  endpoints: (builder) => ({
    getCompanies: builder.query<Company[], string | undefined>({
      query: (query) => {
        const url = `companies?query=${query}`;
        return {
          url,
          method: 'GET',
          credentials: 'include',
        };
      },
    }),
  }),
});

export const { useGetCompaniesQuery } = companyApi;
