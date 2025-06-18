# 📚 Book Manager App

A simple web application built with **React**, **Tailwind CSS**, and **FakeREST API** to manage a list of books.  
This webapp allows users to **view books from an API** and **add, edit, or delete locally stored books**, using **LocalStorage** for persistence.

---

## 🚀 Features

- ✅ View books fetched from the FakeREST API
- ➕ Add new books (saved in LocalStorage)
- ✏️ Edit existing **local books only**
- ❌ Delete **only local books**
- 💾 Persistent data with LocalStorage
- 🎨 Responsive UI styled with Tailwind CSS
- ⚛️ React Router for smooth navigation
- 🔁 Axios used for API requests

> ⚠️ *Note: API-fetched books are **read-only**. Only locally added books can be edited or deleted.*

---

## 🔧 Tech Stack

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/) – for making HTTP requests
- [FakeREST API](https://fakerestapi.azurewebsites.net/)
- [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [React Router DOM](https://reactrouter.com/en/main)

---

## 📁 Folder Structure

```bash
src/
├── api/
│   └── axios.api.js         # Axios setup and API logic
├── components/
│   └── Navbar.jsx
├── pages/
│   ├── Add.jsx
│   ├── Delete.jsx
│   ├── Details.jsx
│   ├── Edit.jsx
│   ├── Home.jsx
│   └── List.jsx
├── App.jsx
├── main.jsx
└── index.css

---

---

## ▶️ How to Run

Clone the repo, run `npm install` to install dependencies, then `npm run dev` to start the development server at `http://localhost:5173`.


