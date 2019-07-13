import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'Origin',
      author: 'Dan Brown'
    },
    {
      id: 2,
      title: 'Everything That Remains',
      author: 'Joshua Fields Millburn'
    }
  ]);
  const addBook = (title, author) => {
    setBooks([...books, {title, author, id: uuid() }]);
  };
  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };
  return (
    <BookContext.Provider value={{books, addBook, removeBook}}>
      { props.children }
    </BookContext.Provider>
  )
}

export default BookContextProvider