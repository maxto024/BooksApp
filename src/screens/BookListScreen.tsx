
/*
 * Created on Sat Oct 26 2024
 * Author Mohamed Hassan
 * Copyright (c) 2024
 */import React, { useEffect, useCallback } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import BookCard from '../components/BookCard';
import { fetchBooksStart } from '../store/bookSlice';
import { RootState } from '../store/store';
import { Book } from '../types/book';

const BookListScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { books, loading, error } = useSelector((state: RootState) => state.books);

  useEffect(() => {
    dispatch(fetchBooksStart());
  }, [dispatch]);

  const renderBookCard = useCallback(({ item }: { item: Book }) => {
    return <BookCard book={item} />;
  }, []);

  if (loading) return <ActivityIndicator testID="loading-indicator" />;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <FlatList
      data={books}
      keyExtractor={(item) => item.title}
      renderItem={renderBookCard}
      initialNumToRender={10}
      maxToRenderPerBatch={10}
      windowSize={5}
      removeClippedSubviews={true}
      getItemLayout={(data, index) => (
        { length: 150, offset: 150 * index, index } // Adjust `150` to match the item height
      )}
    />
  );
};

export default BookListScreen;
