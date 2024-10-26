/*
 * Created on Sat Oct 26 2024
 * Author Mohamed Hassan
 * Copyright (c) 2024
 */
import { runSaga } from 'redux-saga';
import * as api from '../../src/api/bookApi';
import { fetchBooksStart, fetchBooksSuccess, fetchBooksFailure } from '../../src/store/bookSlice';
import { handleFetchBooks } from '../../src/store/bookSaga';
import { Book } from '../../src/types';

describe('bookSaga', () => {
  it('dispatches success action when API call succeeds', async () => {
    const books :Book[] = [{ title: 'Test Book', author: 'Author', imageURL: 'url' }];
    jest.spyOn(api, 'fetchBooks').mockResolvedValue(books);

    const dispatched: any[] = [];
    await runSaga({
      dispatch: (action) => dispatched.push(action),
    }, handleFetchBooks);

    expect(dispatched).toContainEqual(fetchBooksSuccess(books));
  });

  it('dispatches failure action when API call fails', async () => {
    const error = 'Network Error';
    jest.spyOn(api, 'fetchBooks').mockRejectedValue(new Error(error));

    const dispatched: any[] = [];
    await runSaga({
      dispatch: (action) => dispatched.push(action),
    }, handleFetchBooks);

    expect(dispatched).toContainEqual(fetchBooksFailure(error));
  });
});
