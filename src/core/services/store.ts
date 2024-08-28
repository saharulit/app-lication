import { configureStore } from '@reduxjs/toolkit';
import { appliedJobsApi } from '../api/appliedJobsApi';
import { authApi } from '../api/authApi';
import authReducer from '../redux/authSlice';

export const store = configureStore({
  reducer: {
    [appliedJobsApi.reducerPath]: appliedJobsApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      appliedJobsApi.middleware,
      authApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
