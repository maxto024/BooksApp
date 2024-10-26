/*
 * Created on Sat Oct 26 2024
 * Author Mohamed Hassan
 * Copyright (c) 2024
 */
import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import BookListScreen from '../../src/screens/BookListScreen';
import { fetchBooksStart } from '../../src/store/bookSlice';

const mockStore = configureStore([]);

describe('<BookListScreen />', () => {
  it('renders loading indicator when loading', () => {
    const store = mockStore({ books: { books: [], loading: true, error: null } });
    const { getByTestId } = render(
      <Provider store={store}>
        <BookListScreen />
      </Provider>
    );
    expect(getByTestId('loading-indicator')).toBeTruthy();
  });

  it('renders error message when there is an error', () => {
    const store = mockStore({ books: { books: [], loading: false, error: 'Error message' } });
    const { getByText } = render(
      <Provider store={store}>
        <BookListScreen />
      </Provider>
    );
    expect(getByText('Error: Error message')).toBeTruthy();
  });

  it('renders book list when data is available', () => {
    const books = [{ title: 'Book 1', author: 'Author', cover: 'url' }];
    const store = mockStore({ books: { books, loading: false, error: null } });
    const { getByText } = render(
      <Provider store={store}>
        <BookListScreen />
      </Provider>
    );
    expect(getByText('Book 1')).toBeTruthy();
    expect(getByText('Author')).toBeTruthy();
  });

  it('dispatches fetchBooksStart on mount', () => {
    const store = mockStore({ books: { books: [], loading: false, error: null } });
    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <BookListScreen />
      </Provider>
    );

    expect(store.dispatch).toHaveBeenCalledWith(fetchBooksStart());
  });
});
