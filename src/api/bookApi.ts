/*
 * Created on Sat Oct 26 2024
 * Author Mohamed Hassan
 * Copyright (c) 2024
 */
import axios from 'axios';
import { API_URL } from '../utils/constents';
import { Book } from '../types/book';

export const fetchBooks = async (): Promise<Book[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};
