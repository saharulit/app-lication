import { configureStore } from '@reduxjs/toolkit';
import { appliedJobsApi } from '../api/appliedJobsApi';
import { authApi } from '../api/authApi';
import { companyApi } from '../api/companyApi';

export const store = configureStore({
  reducer: {
    [appliedJobsApi.reducerPath]: appliedJobsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [companyApi.reducerPath]: companyApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      appliedJobsApi.middleware,
      authApi.middleware,
      companyApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
