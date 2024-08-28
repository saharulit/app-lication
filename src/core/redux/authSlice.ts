import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../entities/user/user';
import { authApi } from '../api/authApi';

interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.loginUser.matchFulfilled, (state, { payload }) => {
        state.user = payload;
      })
        // .addMatcher(authApi.endpoints.logoutUser.matchFulfilled, (state) => {
        //   state.user = null;
        // });
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
