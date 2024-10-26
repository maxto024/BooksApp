/*
 * Created on Sat Oct 26 2024
 * Author Mohamed Hassan
 * Copyright (c) 2024
 */
import bookReducer, { fetchBooksStart, fetchBooksSuccess, fetchBooksFailure } from '../../src/store/bookSlice';
import { Book } from '../../src/types/book';

describe('bookSlice', () => {
  const initialState = { books: [], loading: false, error: null };

  it('sets loading to true on fetchBooksStart', () => {
    const state = bookReducer(initialState, fetchBooksStart());
    expect(state.loading).toBe(true);
  });

  it('sets books and loading to false on fetchBooksSuccess', () => {
    const books: Book[] = [{ title: 'Test Book', author: 'Author', imageURL: 'url' }];
    const state = bookReducer(initialState, fetchBooksSuccess(books));
    expect(state.books).toEqual(books);
    expect(state.loading).toBe(false);
  });

  it('sets error and loading to false on fetchBooksFailure', () => {
    const state = bookReducer(initialState, fetchBooksFailure('Error message'));
    expect(state.error).toBe('Error message');
    expect(state.loading).toBe(false);
  });
});
