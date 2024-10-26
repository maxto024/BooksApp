
/*
 * Created on Sat Oct 26 2024
 * Author Mohamed Hassan
 * Copyright (c) 2024
 */import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import bookReducer from './bookSlice';
import bookSaga from './bookSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(bookSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
