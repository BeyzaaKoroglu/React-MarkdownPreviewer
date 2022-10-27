import { configureStore } from "@reduxjs/toolkit";
import textsSlice from "./texts/textsSlice";

export const store = configureStore({
  reducer: {
    texts: textsSlice,
  },
});
