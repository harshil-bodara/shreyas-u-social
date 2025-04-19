import { createSlice } from "@reduxjs/toolkit";
import { companyFollowUnfollowAction, friendRequestAction, ignoreApiAction, loginAction, withdrawConnectionAction } from "store/action/auth.action";

type AuthState = {
  token: string | null;
  loading: boolean;
  error: string | null;
};

const initialState: AuthState = {
  token: typeof window !== "undefined" ? localStorage.getItem("token") : null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.error = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
        localStorage.setItem("token", action.payload); 
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string; 
      })

      .addCase(withdrawConnectionAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(withdrawConnectionAction.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(withdrawConnectionAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // === Ignore API Action ===
      .addCase(ignoreApiAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(ignoreApiAction.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(ignoreApiAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // === Friend Request API Action ===
      .addCase(friendRequestAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(friendRequestAction.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(friendRequestAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // === CompanyFollowUnfollow API Action ===
      .addCase(companyFollowUnfollowAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(companyFollowUnfollowAction.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(companyFollowUnfollowAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
