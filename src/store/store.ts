import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./app/LayoutManagement/layoutslice";
import searchReducer from "./app/NavigationManagement/searchSlice";
import sidebarReducer from "./app/SidebarManagement/sidebarwidthSlice";

const store = configureStore({
  reducer: {
    layout: layoutReducer,
    search: searchReducer,
    sidebar: sidebarReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
