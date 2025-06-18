import React, { useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

export default function Add() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create new book object
    const newBook = {
      id: Math.floor(Math.random() * 10000), // FakeREST requires ID
      title,
      description,
      pageCount: 100,
      excerpt: "New book excerpt",
      publishDate: new Date().toISOString()
    };

    try {
      await axios.post('/Books', newBook);

      const existing = JSON.parse(localStorage.getItem('addedBooks')) || [];
      localStorage.setItem('addedBooks', JSON.stringify([...existing, newBook]));

      alert('Book added successfully!');
      navigate('/item/list');
    } catch (error) {
      console.error('Error adding book:', error);
      alert('Failed to add book.');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Add a New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="border p-2 w-full"
        />
        <textarea
          placeholder="Book Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="border p-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Add Book
        </button>
      </form>
    </div>
  );
}
