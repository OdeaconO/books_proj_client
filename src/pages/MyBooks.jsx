import { useEffect, useState } from "react";
import { api } from "../api";
import { Link } from "react-router-dom";
import PaginationFooter from "../components/PaginationFooter";
import { useAuth } from "../context/AuthContext";
import { useSearchPagination } from "../hooks/useSearchPagination";
import BookCard from "../components/BookCard";
import PageLoader from "../components/PageLoader";

const MyBooks = () => {
  const [books, setBooks] = useState([]);
  const [pagination, setPagination] = useState(null);
  const { user, isAuthenticated } = useAuth();
  const { q, debouncedQ, page, genre, sort, order, setPage } =
    useSearchPagination();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyBooks = async () => {
      try {
        setLoading(true);

        const res = await api.get("/my-books", {
          params: {
            q: debouncedQ,
            page,
            genre,
            sort,
            order,
          },
        });

        setBooks(res.data.books);
        setPagination(res.data.pagination);
      } catch (err) {
        console.error(err);
        setBooks([]);
        setPagination(null);
      } finally {
        setLoading(false);
      }
    };

    fetchMyBooks();
  }, [debouncedQ, page, genre, sort, order]);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/books/${id}`);
      setBooks((prev) => {
        const updated = prev.filter((b) => b.id !== id);

        if (updated.length === 0 && page > 1) {
          setPage(page - 1);
        }

        return updated;
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className="page">
      <main className="page-content">
        <h1>MY BOOKS</h1>

        {/* 1. Empty State Check */}
        {Array.isArray(books) && books.length === 0 && (
          <div className="empty-state">
            <h2>No books yet 📘</h2>
            <p>You haven’t added any books yet.</p>
            <Link to="/add" className="cta-btn">
              Add your first book
            </Link>
          </div>
        )}

        {/* 2. List State Check */}
        {Array.isArray(books) && books.length > 0 && (
          <div className="books">
            {books.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                q={q} // Pass empty string (no highlighting needed here)
                user={user} // Pass user for permission checks
                isAuthenticated={isAuthenticated}
                onDelete={handleDelete} // Pass the specific delete function for this page
              />
            ))}
          </div>
        )}
      </main>
      <PaginationFooter pagination={pagination} />
    </div>
  );
};

export default MyBooks;
