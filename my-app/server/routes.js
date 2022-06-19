const express = require('express');
const users = require('./controllers/users.js');
console.log('controller users register', users.register)

const router = express.Router();

router.get('/', (req, res) => (
  res.send('HELLO FROM MVP-blog')
));

router.post('/api/auth/register', users.register);
router.post('/api/auth/login', users.login);


module.exports = router;