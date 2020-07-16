const express = require('express');
const router = express.Router();
const { create, list, listAllPostsCategoriesTags, read, remove, update } = require('../controllers/post');

const { requireSignin, adminMiddleware } = require('../controllers/auth');

router.post('/post', requireSignin, adminMiddleware, create);
router.get('/posts', list);
router.post('/posts-categories-tags', listAllPostsCategoriesTags);
router.get('/post/:slug', read);
router.delete('/post/:slug', requireSignin, adminMiddleware, remove);
router.put('/post/:slug', requireSignin, adminMiddleware, update);

module.exports = router;