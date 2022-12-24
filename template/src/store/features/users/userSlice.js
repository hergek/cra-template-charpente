import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import * as user from "../../../config/endPoint";

export const onCreateUser = createAsyncThunk(
  "user/onCreateUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await user.createUser(userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const onFecthUser = createAsyncThunk(
  "user/onFecthUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await user.findAllUsers();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const onFecthOneUser = createAsyncThunk(
  "user/onFecthOneUser",
  async (id, { rejectWithValue }) => {
    try {
      const response = await user.findOneUserAndDelete(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const onUpdateUser = createAsyncThunk(
  "user/onUpdateUser",
  async ({ id, userdata }, { rejectWithValue }) => {
    try {
      const response = await user.findUserAndUpdate(id, userdata);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: null,
    user: null,
    error: "",
    isloading: false,
  },
  extraReducers: {
    [onCreateUser.pending]: (state, action) => {
      state.isloading = true;
    },
    [onCreateUser.fulfilled]: (state, action) => {
      state.isloading = false;
      toast.success(action.payload?.message);
      state.user = action.payload;
    },
    [onCreateUser.rejected]: (state, action) => {
      state.isloading = false;
      toast.error(action.payload?.message);
      state.error = action.payload.message;
    },

    [onFecthUser.pending]: (state, action) => {
      state.isloading = true;
    },
    [onFecthUser.fulfilled]: (state, action) => {
      state.isloading = false;
      state.users = action.payload;
    },
    [onFecthUser.rejected]: (state, action) => {
      state.isloading = false;
      state.error = action.payload.message;
    },

    [onFecthOneUser.pending]: (state, action) => {
      state.isloading = true;
    },
    [onFecthOneUser.fulfilled]: (state, action) => {
      state.isloading = false;
      state.user = action.payload;
    },
    [onFecthOneUser.rejected]: (state, action) => {
      state.isloading = false;
      state.error = action.payload.message;
    },

    [onUpdateUser.pending]: (state, action) => {
      state.isloading = true;
    },
    [onUpdateUser.fulfilled]: (state, action) => {
      state.isloading = false;
      state.user = action.payload;
    },
    [onUpdateUser.rejected]: (state, action) => {
      state.isloading = false;
      state.error = action.payload.message;
    },
  },
});

export default userSlice.reducer;
