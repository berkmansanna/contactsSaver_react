import { createSlice } from '@reduxjs/toolkit';
import { contactsApi } from '../contacts/contactsApi';

const initialState = {
  user: { name: null, email: null },
  isLoggedIn: false,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(
        contactsApi.endpoints.createUser.matchFulfilled,
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        contactsApi.endpoints.loginUser.matchFulfilled,
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(contactsApi.endpoints.logoutUser.matchFulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addMatcher(
        contactsApi.endpoints.fetchCurrentUser.matchFulfilled,
        (state, { payload }) => {
          state.user = payload;
          state.isLoggedIn = true;
        }
      );
  },
});

const authReducer = authSlice.reducer;

export { authReducer };
