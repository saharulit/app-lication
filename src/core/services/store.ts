import { configureStore } from '@reduxjs/toolkit';
import { appliedJobsApi } from '../api/appliedJobsApi';

export const store = configureStore({
  reducer: {
    // Add the API reducer to the store
    [appliedJobsApi.reducerPath]: appliedJobsApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appliedJobsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
