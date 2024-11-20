import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllBooks } from "../api/api"; // Import the centralized function

const AllBooks = () => {
  const [availableBooks, setAvailableBooks] = useState([]);
  const [unavailableBooks, setUnavailableBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const booksData = await fetchAllBooks();

        // Separate available and unavailable books
        setAvailableBooks(booksData.filter((book) => book.available));
        setUnavailableBooks(booksData.filter((book) => !book.available));
      } catch (error) {
        console.error("Error fetching books in AllBooks:", error);
      }
    };

    getBooks();
  }, []);

  return (
    <>
      <section>
        <h2>Available Books</h2>
        <ul>
          {availableBooks.map((book) => (
            <li key={book.id} className="available">
              <Link to={`/books/${book.id}`}>
                <strong>{book.title}</strong> by {book.author}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Unavailable Books</h2>
        <ul>
          {unavailableBooks.map((book) => (
            <li key={book.id} className="unavailable">
              <Link to={`/books/${book.id}`}>
                <strong>{book.title}</strong> by {book.author}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default AllBooks;