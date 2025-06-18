import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-700 text-white py-4 shadow-lg">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">📘 Book Manager</h1>

        <ul className="flex space-x-8 text-lg font-medium">
          <li>
            <NavLink
              to="/homepage"
              className={({ isActive }) =>
                isActive
                  ? 'border-b-2 border-white pb-1'
                  : 'hover:text-blue-200 transition-colors'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/item/list"
              className={({ isActive }) =>
                isActive
                  ? 'border-b-2 border-white pb-1'
                  : 'hover:text-blue-200 transition-colors'
              }
            >
              Books List
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/item/add"
              className={({ isActive }) =>
                isActive
                  ? 'border-b-2 border-white pb-1'
                  : 'hover:text-blue-200 transition-colors'
              }
            >
              Add Book
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
