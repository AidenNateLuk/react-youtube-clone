import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ViewportState {
  height: number;
}

const initialState: ViewportState = {
  height: window.innerHeight,
};

const viewportSlice = createSlice({
  name: "viewport",
  initialState,
  reducers: {
    setViewportHeight: (state, action: PayloadAction<number>) => {
      state.height = action.payload;
    },
  },
});

export const { setViewportHeight } = viewportSlice.actions;
export const viewportInitialState = initialState;
