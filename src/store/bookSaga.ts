
/*
 * Created on Sat Oct 26 2024
 * Author Mohamed Hassan
 * Copyright (c) 2024
 */import { call, put, takeLatest, SagaReturnType } from 'redux-saga/effects';
import { fetchBooks } from '../api/bookApi';
import { fetchBooksStart, fetchBooksSuccess, fetchBooksFailure } from './bookSlice';
import { Book } from '../types/book';

// Specify the type for the API call response
type FetchBooksResponse = SagaReturnType<typeof fetchBooks>;

function* handleFetchBooks(): Generator<unknown, void, FetchBooksResponse> {
  try {
    // Use SagaReturnType to type the result of fetchBooks
    const books = yield call(fetchBooks);
    yield put(fetchBooksSuccess(books));
  } catch (error) {
    yield put(fetchBooksFailure((error as Error).message));
  }
}

// Watcher saga
export default function* bookSaga() {
  yield takeLatest(fetchBooksStart.type, handleFetchBooks);
}
export { handleFetchBooks }; // Named export for the saga
