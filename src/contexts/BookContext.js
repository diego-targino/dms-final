import { useState } from "react";
import { createContext } from "react";
import { firebase } from "../firebase/config";
import { generateGUID } from "../util/generators";

export const BookContext = createContext();

export function BookProvider({ children }) {
  const [bookList, setBookList] = useState([]);

  const saveNewBook = (bookData) => {
    try {
      const uid = generateGUID();

      const booksRef = firebase.firestore().collection("books");

      const book = {
        id: uid,
        userId: bookData.userId,
        title: bookData.title,
        author: bookData.author,
        gender: bookData.gender,
        description: bookData.description,
      };

      booksRef
        .doc(uid)
        .set(book)
        .then(() => {
          setBookList([...bookList, book]);
        })
        .catch((error) => {
          throw error;
        });
      return true;
    } catch (error) {
      return false;
    }
  };

  const getBookList = (userId, filter = "") => {
    try {
      let bookref = firebase.firestore().collection("books");

      if (filter) bookref = bookref.where("title", "array-contains", filter);

      bookref
        .where("userId", "==", userId)
        .orderBy("title", "asc")
        .onSnapshot(
          (query) => {
            const bookEntites = [];
            query.forEach((doc) => {
              const book = doc.data();
              bookEntites.push(book);
            });

            setBookList(bookEntites);
          },
          (error) => {
            throw error;
          }
        );
    } catch (error) {
      alert("Error on get book list");
    }
  };

  const updateBook = (bookData) => {
    try {
      const uid = bookData.id;

      const booksRef = firebase.firestore().collection("books");

      const book = {
        id: uid,
        userId: bookData.userId,
        title: bookData.title,
        author: bookData.author,
        gender: bookData.gender,
        description: bookData.description,
      };

      booksRef
        .doc(uid)
        .set(book)
        .then(() => {
          let newList = bookList;
          let updatedIndex = bookList.findIndex(
            (book) => book.id === bookData.id
          );

          newList[updatedIndex] = book;

          setBookList(newList);
        })
        .catch((error) => {
          throw error;
        });
      return true;
    } catch (error) {
      return false;
    }
  };

  const deleteBook = (bookId) => {
    try {
      const booksRef = firebase.firestore().collection("books");

      booksRef
        .doc(bookId)
        .delete()
        .then(() => {
          setBookList(bookList.filter((book) => book.id !== bookId));
        });

      return true;
    } catch (error) {
      return false;
    }
  };

  return (
    <BookContext.Provider
      value={{
        bookList,
        saveNewBook,
        getBookList,
        updateBook,
        deleteBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}
