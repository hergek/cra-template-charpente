import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as auth from "../../../config/endPoint";

export const onLogin = createAsyncThunk(
  "auth/login",
  async ({ datas }, { rejectWithValue }) => {
    try {
      const response = await auth.createLogin(datas);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    me: null,
    error: "",
    loading: false,
  },
  reducers: {
    setMe: (state, action) => {
      state.me = action.payload;
    },
    setLogout: (state, action) => {
      localStorage.clear();
      state.me = null;
    },
  },
  extraReducers: {
    [onLogin.pending]: (state, action) => {
      state.loading = true;
    },
    [onLogin.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem("me", JSON.stringify({ ...action.payload?.datas }));
      state.me = action.payload;
    },
    [onLogin.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export const { setMe, setLogout } = authSlice.actions;

export default authSlice.reducer;
