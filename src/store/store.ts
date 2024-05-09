import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./app/LayoutManagement/layoutslice";
const store = configureStore({
  reducer: {
    layout: layoutReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
