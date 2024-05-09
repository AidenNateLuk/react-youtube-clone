import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  isSmallScreen: boolean;
}

const initialState: State = {
  isSmallScreen: false,
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    changeLayout: (state, action: PayloadAction<boolean>) => {
      state.isSmallScreen = action.payload;
    },
  },
});
export const { changeLayout } = layoutSlice.actions;
export default layoutSlice.reducer;
