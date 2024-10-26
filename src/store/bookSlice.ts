/*
 * Created on Sat Oct 26 2024
 * Author Mohamed Hassan
 * Copyright (c) 2024
 */import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book } from '../types/book';

interface BookState {
  books: Book[];
  loading: boolean;
  error: string | null;
}

const initialState: BookState = {
  books: [],
  loading: false,
  error: null,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    fetchBooksStart(state) {
      state.loading = true;
    },
    fetchBooksSuccess(state, action: PayloadAction<Book[]>) {
      state.books = action.payload;
      state.loading = false;
    },
    fetchBooksFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchBooksStart, fetchBooksSuccess, fetchBooksFailure } = bookSlice.actions;
export default bookSlice.reducer;
