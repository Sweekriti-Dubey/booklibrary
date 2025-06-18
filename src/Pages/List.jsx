import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import { Link, useLocation } from 'react-router-dom';

function List() {
  const [books, setBooks] = useState([]);
  const location = useLocation();

  useEffect(() => {
    axios.get('/Books')
      .then(res => {
        const apiBooks = res.data;
        const localBooks = JSON.parse(localStorage.getItem('addedBooks')) || [];
        const allBooks = [...apiBooks, ...localBooks];
        setBooks(allBooks);
      })
      .catch(err => console.error('Error fetching books:', err));
  }, [location]);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">📚 All Books</h2>

      {books.length === 0 ? (
        <p className="text-gray-500 text-center">No books found.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map(book => (
            <div key={book.id} className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">{book.title}</h3>
              <Link
                to={`/item/${book.id}/details`}
                className="inline-block mt-2 text-sm text-blue-500 hover:underline"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default List;
