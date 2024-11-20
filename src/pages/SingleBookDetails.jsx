import { useParams,Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchBookById } from "../api/api"; // Import the centralized function

const SingleBookDetails = () => {
  const { bookId } = useParams(); // Get bookId from URL params
  const [book, setBook] = useState(null);

  useEffect(() => {
    const getBookDetails = async () => {
      try {
        const bookData = await fetchBookById(bookId); // Fetch book by ID
        console.log("Fetched single book:", bookData);
        setBook(bookData); // Set book data
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    getBookDetails();
  }, [bookId]); // Re-fetch if bookId changes

  if (!book) return <div>Loading...</div>; // Show loading if data is not yet available

  return (
    <div>
      <h2>{book.book.title}</h2>
      <p><strong>Author:</strong> {book.book.author}</p>
      <img src={book.book.coverimage} alt={`${book.book.title} cover`} style={{ width: "200px" }} />
      <p><strong>Description:</strong> {book.book.description}</p>
      <p><strong>Currently:</strong> {book.book.available ? "Available for Checkout" : "Unavailable for Checkout"}</p>
      <Link to="/"><button>Back to Home</button></Link>
    </div>
  );
};

export default SingleBookDetails;