import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AppliedJob } from '../entities/appliedJob';

export const appliedJobsApi = createApi({
  reducerPath: 'appliedJobsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://app-lication-server.vercel.app/api/',
    credentials: 'include', // Ensures cookies are sent with requests
  }),
  endpoints: (builder) => ({
    getAppliedJobs: builder.query<AppliedJob[], void>({
      query: () => 'applied-jobs',
    }),
    getAppliedJobById: builder.query<AppliedJob, string>({
      query: (id) => `applied-jobs/${id}`,
    }),
    addAppliedJob: builder.mutation<AppliedJob, Partial<AppliedJob>>({
      query: (job) => ({
        url: 'applied-jobs',
        method: 'POST',
        body: job,
      }),
    }),
    updateAppliedJob: builder.mutation<
      AppliedJob,
      { id: string; job: Partial<AppliedJob> }
    >({
      query: ({ id, job }) => ({
        url: `applied-jobs/${id}`,
        method: 'PUT',
        body: job,
      }),
    }),
    deleteAppliedJob: builder.mutation<void, string>({
      query: (id) => ({
        url: `applied-jobs/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetAppliedJobsQuery,
  useGetAppliedJobByIdQuery,
  useAddAppliedJobMutation,
  useUpdateAppliedJobMutation,
  useDeleteAppliedJobMutation,
} = appliedJobsApi;
