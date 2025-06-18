import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from '../api/axios';

export default function Details() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/Books/${id}`)
      .then(res => setBook(res.data))
      .catch(() => {
        const localBooks = JSON.parse(localStorage.getItem('addedBooks')) || [];
        const found = localBooks.find(b => String(b.id) === String(id));
        if (found) {
          setBook(found);
        } else {
          setError('Book not found.');
        }
      });
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      try {
        await axios.delete(`/Books/${id}`);
      } catch (err) {
        console.warn('Book might be local only.');
      }

      const existing = JSON.parse(localStorage.getItem('addedBooks')) || [];
      const updated = existing.filter(b => String(b.id) !== String(id));
      localStorage.setItem('addedBooks', JSON.stringify(updated));

      alert('Book deleted');
      navigate('/item/list');
    }
  };

  if (error) return <p className="text-red-500 text-center mt-6">{error}</p>;
  if (!book) return <p className="text-center mt-6">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md mt-8">
      <h2 className="text-3xl font-bold text-blue-800 mb-4">{book.title}</h2>

      <div className="space-y-3 text-gray-700">
        <p><span className="font-semibold">📖 Description:</span> {book.description}</p>
        <p><span className="font-semibold">🔖 Excerpt:</span> {book.excerpt}</p>
        <p><span className="font-semibold">🗓️ Publish Date:</span> {new Date(book.publishDate).toLocaleDateString()}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-4">
        <Link
          to={`/item/${book.id}/edit`}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
        >
          ✏️ Edit
        </Link>

        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          🗑️ Delete
        </button>

        <Link
          to="/item/list"
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded"
        >
          ← Back to List
        </Link>
      </div>
    </div>
  );
}
