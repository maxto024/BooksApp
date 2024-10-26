
/*
 * Created on Sat Oct 26 2024
 * Author Mohamed Hassan
 * Copyright (c) 2024
 */import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Book } from '../types/book';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  /// because ios simulator wont show  image because api is returing an http images 
  const convertToHttps = (url?: string): string | undefined => {
    if (url && url.startsWith('http://')) {
      return 'https' + url.slice(4);
    } else {
      return url;
    }
  }
  return (
    <View style={styles.container}>
      <Image source={{ uri: convertToHttps(book.imageURL) }} resizeMode="cover" resizeMethod='auto' style={styles.thumbnail} testID="book-cover-image" />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{book.title || "NO TITLE"}</Text>
        <Text style={styles.additionalInfo}>{book.author || "Unknown"}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
  },
  thumbnail: {
    width: 50,
    height: 75,
    borderRadius: 4,
  },
  detailsContainer: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  additionalInfo: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
});

export default BookCard;