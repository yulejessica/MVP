const express = require('express');
const auth = require('./controllers/auth.js');
const users = require('./controllers/users.js');

const router = express.Router();

// router.get('/', (req, res) => (
//   res.send('HELLO FROM MVP-blog')auth
// ));

router.post('/api/auth/register', auth.register);
router.post('/api/auth/login', auth.login);
router.put('/api/users/:id', users.update);
router.delete('/api/users/:id', users.delete);
router.get('/api/users/:id', users.getOne);



module.exports = router;