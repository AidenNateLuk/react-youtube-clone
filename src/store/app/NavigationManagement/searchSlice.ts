import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  isSearching: boolean;
}

export const initialState: State = {
  isSearching: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    toggleSearch: (state) => {
      state.isSearching = !state.isSearching;
    },
    setSearch: (state, action: PayloadAction<boolean>) => {
      state.isSearching = action.payload;
    },
  },
});

export const { toggleSearch, setSearch } = searchSlice.actions;
export default searchSlice.reducer;
