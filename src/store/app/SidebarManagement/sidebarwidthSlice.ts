// sidebarSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  sidebarWidth: number;
}

const initialState: State = {
  sidebarWidth: 75,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebarWidth: (state) => {
      state.sidebarWidth = state.sidebarWidth === 75 ? 175 : 75;
    },
    setSidebarWidth: (state, action: PayloadAction<number>) => {
      state.sidebarWidth = action.payload;
    },
  },
});

export const { toggleSidebarWidth, setSidebarWidth } = sidebarSlice.actions;
export default sidebarSlice.reducer;
