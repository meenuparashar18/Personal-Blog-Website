const express = require('express');
const router = express.Router();

// Controller functions ko import karo
const {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost
} = require('../controllers/postController');

// 1. Protect middleware ko import karein
const { protect } = require('../middleware/authMiddleware');

// 2. Routes for '/api/posts'
router.route('/')
    .get(getAllPosts)             // Sab dekh sakte hain (Public)
    .post(protect, createPost);   // Sirf logged-in user post kar sakta hai (Protected)

// 3. Routes for '/api/posts/:id'
router.route('/:id')
    .get(getPostById)             // Public
    .patch(protect, updatePost)   // Protected
    .delete(protect, deletePost); // Protected

module.exports = router;