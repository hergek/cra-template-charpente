import { configureStore } from "@reduxjs/toolkit";
import MeReducer from "../store/features/auth/authSlice.js";
import userReducer from "../store/features/users/userSlice.js";

export default configureStore({
  reducer: {
    me: MeReducer,
    users: userReducer,
  },
});
