/*
 * Created on Sat Oct 26 2024
 * Author Mohamed Hassan
 * Copyright (c) 2024
 */
import React from 'react';
import { render } from '@testing-library/react-native';
import BookCard from '../../src/components/BookCard';
import { Book } from '../../src/types/book';

const mockBook: Book = { title: 'Sample Book', author: 'Author', imageURL: 'image-url' };

describe('<BookCard />', () => {
  it('renders book title, author, and cover image', () => {
    const { getByText, getByTestId } = render(<BookCard book={mockBook} />);
    expect(getByText('Sample Book')).toBeTruthy();
    expect(getByText('Author')).toBeTruthy();
    expect(getByTestId('book-cover-image')).toHaveProp('source', { uri: 'image-url' });
  });
});
