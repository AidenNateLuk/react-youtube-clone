import { combineReducers, configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./app/LayoutManagement/layoutslice";
import searchReducer from "./app/NavigationManagement/searchSlice";
import sidebarReducer from "./app/SidebarManagement/sidebarwidthSlice";

const rootReducer = combineReducers({
  layout: layoutReducer,
  search: searchReducer,
  sidebar: sidebarReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
