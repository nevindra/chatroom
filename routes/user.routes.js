const express = require('express')
const router = express.Router()

const User = require('../controllers/user.controllers');

router.get('/', User.index)
router.get('/register', User.getRegister)

router.post('/login', User.login)
router.post('/register', User.registration)

module.exports = router