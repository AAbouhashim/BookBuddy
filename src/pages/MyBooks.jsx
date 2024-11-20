import { useEffect, useState } from "react";
import { fetchUserData } from "../api/api";

const MyBooks = ({ token }) => {
  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      if (token) {
        const result = await fetchUserData(token);
        if (result.error) {
          setMessage(result.error);
        } else {
          setBooks(result.books);
          setMessage(`Welcome back, ${result.firstname}!`);
        }
      } else {
        setMessage("You must be logged in to view your books.");
      }
    };

    fetchBooks();
  }, [token]);

  return (
    <div>
      <h1>My Books</h1>
      <p>{message}</p>
      {books.length > 0 ? (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>You have no books checked out.</p>
      )}
    </div>
  );
};

export default MyBooks;