import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../api/axios';

export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState({ title: '', description: '' });
  const [isLocal, setIsLocal] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Check localStorage first
    const localBooks = JSON.parse(localStorage.getItem('addedBooks')) || [];
    const found = localBooks.find(b => String(b.id) === String(id));

    if (found) {
      setBook(found);
      setIsLocal(true);
    } else {
      // Else, try API
      axios.get(`/Books/${id}`)
        .then(res => setBook(res.data))
        .catch(() => setError('Book not found.'));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLocal) {
        const localBooks = JSON.parse(localStorage.getItem('addedBooks')) || [];
        const updated = localBooks.map(b => b.id === book.id ? book : b);
        localStorage.setItem('addedBooks', JSON.stringify(updated));
        alert('Book updated locally!');
      } else {
        await axios.put(`/Books/${id}`, book);
        alert('Book updated on server!');
      }

      navigate('/item/list');
    } catch (err) {
      console.error(err);
      alert('Error updating book.');
    }
  };

  if (error) return <p className="text-red-500">{error}</p>;
  if (!book) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Edit Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={book.title}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <textarea
          name="description"
          value={book.description}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
        >
          Update Book
        </button>
      </form>
    </div>
  );
}
