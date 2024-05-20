import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QueryState {
  query: string;
}

const initialState: QueryState = {
  query: "",
};

const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});
export const selectQuery = (state: { query: QueryState }) => state.query.query;
export const { setQuery } = querySlice.actions;
export default querySlice.reducer;
