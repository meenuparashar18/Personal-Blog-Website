// client/src/App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Pages
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import AdminDashboard from './pages/AdminDashboard';
import LoginPage from './pages/LoginPage';

// Import Components
import Navbar from './components/Navbar'; // Assuming you have a Navbar

// HIGHLIGHT START
// 1. Import the ProtectedRoute component you just created.
import ProtectedRoute from './components/ProtectedRoute';
// HIGHLIGHT END

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Render the navigation bar on all pages */}
      <main className="container">
        <Routes>
          {/* --- Public Routes --- */}
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:slug" element={<PostPage />} /> {/* Assuming you updated this in a previous step for slugs */}
          <Route path="/admin/login" element={<LoginPage />} />

          {/* --- Protected Admin Route --- */}
          {/* HIGHLIGHT START */}
          {/* 2. This is the crucial change. We replace the simple element
               with our ProtectedRoute component wrapping the AdminDashboard. */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          {/* HIGHLIGHT END */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
