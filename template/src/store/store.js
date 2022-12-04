import { configureStore } from "@reduxjs/toolkit";
import MeReducer from "../store/features/auth/authSlice.js";

export default configureStore({
  reducer: {
    me: MeReducer,
  },
});
