
/*
 * Created on Sat Oct 26 2024
 * Author Mohamed Hassan
 * Copyright (c) 2024
 */import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import BookListScreen from './screens/BookListScreen';

const App = () => {
  return (
    <Provider store={store}>
      <BookListScreen />
    </Provider>
  );
};

export default App;
