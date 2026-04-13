
const express = require('express');
const router  = express.Router();
const Post = require('../models/Post');
const AppError = require('../utils/AppError');
const asyncHandler = require('../utils/asyncHandler');


// GET /posts
router.get('/', asyncHandler(async (req, res) => {
  const filter ={};

  if(req.query.author) filter.author = req.query.author;
  if(req.query.tags) filter.tags = { $in: [req.query.tags] };

  const posts = await Post.find(filter).sort({ createdAt: -1 });
  res.json({ success: true,count: posts.length, data: posts });
}));

// GET /posts/:id
router.get('/:id', asyncHandler(async(req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) throw new AppError('Post not found',404);
  res.json({ success: true, data: post });
}));

// POST /posts
router.post('/', asyncHandler(async(req, res) => {
  const post = await Post.create(req.body);
  res.status(201).json({ success: true, data: post });
}));

// PUT /posts/:id
router.put('/:id', asyncHandler (async(req, res) => {
  const post = await Post.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!post) throw new AppError('Post not found',404);
  res.json({ success: true, data: post });
}));

// DELETE /posts/:id
router.delete('/:id', asyncHandler (async(req, res) => {
  const post = await Post.findByIdAndDelete(req.params.id);
  if (!post) throw new AppError('Post not found',404);
  res.json({ success: true, data: post });
}));

module.exports = router;