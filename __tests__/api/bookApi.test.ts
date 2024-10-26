/*
 * Created on Sat Oct 26 2024
 * Author Mohamed Hassan
 * Copyright (c) 2024
 */
import axios from 'axios';
import { fetchBooks } from '../../src/api/bookApi';
import AxiosMockAdapter from 'axios-mock-adapter';
import { API_URL } from '../../src/utils/constents';
import { Book } from '../../src/types';

const mock = new AxiosMockAdapter(axios);

describe('bookApi', () => {
  afterEach(() => mock.reset());

  it('fetches books successfully', async () => {
    const booksData: Book[] = [{ title: 'Test Book', author: 'Author', imageURL: 'url' }];
    mock.onGet(API_URL).reply(200, booksData);

    const result = await fetchBooks();
    expect(result).toEqual(booksData);
  });

  it('handles fetch errors', async () => {
    mock.onGet(API_URL).reply(500);

    await expect(fetchBooks()).rejects.toThrow('Request failed with status code 500');
  });
});
