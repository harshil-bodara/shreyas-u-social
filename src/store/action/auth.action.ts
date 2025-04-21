/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Toast from "components/Toast";
import API from "utils/axiosInstance";

export const loginAction = createAsyncThunk(
    'auth/login',
    async (
      { email, password }: { email: string; password: string },
      { rejectWithValue },
    ) => {
      try {
        const response = await API.post('/users/login', { email, password })
        const { token } = response.data
        if (response.status === 200) {
          Toast.success(response.data.message);
          await axios.post("/api/auth", { token });
        }
        return token; 
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        return rejectWithValue(error.response?.data?.message || 'Login failed')
      }
    },
)

export const withdrawConnectionAction = createAsyncThunk(
  'auth/withdrawConnection',
  async (
    { targetUserId }: { targetUserId: string },
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const response = await API.post('/users/withdrawconnection', { targetUserId });
      if (response.status === 200) {
        Toast.success(response.data.message);
      }
      return fulfillWithValue(response.data);
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Withdraw connection failed');
    }
  }
);

export const ignoreApiAction = createAsyncThunk(
  'auth/ignore',
  async (
    { ignoredUserId }: { ignoredUserId: string },
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const response = await API.post('/users/ignore', { ignoredUserId });
      if (response.status === 200) {
        Toast.success(response.data.message);
      }
      return fulfillWithValue(response.data);
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Fast API call failed');
    }
  }
);


export const friendRequestAction = createAsyncThunk(
  'friend/requestAction',
  async (
    {
      type,
      payload
    }: {
      type: 'send' | 'accept' | 'reject' | 'requests';
      payload: { receiverId?: string; requestId?: string };
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await API.post(`/friend/${type}`, payload);

      if (response.status === 201) {
        Toast.success(response.data.message || `Friend ${type} request successful`);
      }
      return rejectWithValue('Unexpected error');
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || `Failed to ${type} friend`);
    }
  }
);


export const companyFollowUnfollowAction = createAsyncThunk(
  'company/followUnfollow',
  async (
    {
      companyId,
      type, // "follow" or "unfollow"
    }: { companyId: string; type: 'follow' | 'unfollow' },
    { rejectWithValue }
  ) => {
    try {
      const response = await API.post(`/company/${type}`, { companyId });

      if (response.status === 200) {
        Toast.success(response.data.message);
      }

    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || `Company ${type} failed`
      );
    }
  }
);
