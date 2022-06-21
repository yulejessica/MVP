const express = require('express');
const auth = require('./controllers/auth.js');
const users = require('./controllers/users.js');
const posts = require('./controllers/posts.js');
const categories =require('./controllers/categories.js');

const router = express.Router();

// router.get('/', (req, res) => (
//   res.send('HELLO FROM MVP-blog')auth
// ));

//AuthRoute:
router.post('/api/auth/register', auth.register);
router.post('/api/auth/login', auth.login);

//UserRoute:
router.put('/api/users/:id', users.update);
router.delete('/api/users/:id', users.delete);
router.get('/api/users/:id', users.getOne);

//PostRoute:
router.get('/api/posts', posts.getAll);
router.get('/api/posts/:id', posts.get);
router.post('/api/posts', posts.createOne);
router.put('/api/posts/:id', posts.update);
router.delete('/api/posts/:id', posts.delete);

//CategoriesRoute:
router.get('/api/categories', categories.get);
router.post('/api/categories', categories.create);

module.exports = router;