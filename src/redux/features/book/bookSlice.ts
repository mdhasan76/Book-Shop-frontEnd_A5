import { IBook } from "../../../types/globalTypes";
import { createSlice } from "@reduxjs/toolkit";

interface BookInitState {
  books: IBook[];
}

const initState: BookInitState = {
  books: [],
};

const bookSlice = createSlice({
  name: "book",
  initialState: initState,
  reducers: {
    test: (state) => {
      state.books = [];
    },
  },
});

export const { test } = bookSlice.actions;
export default bookSlice.reducer;
