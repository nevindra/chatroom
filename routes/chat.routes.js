const express = require('express')
const router = express.Router()

const Chat = require('../controllers/chat.controllers')

router.get('/homepage', Chat.getWelcome)
router.get('/create-chat', Chat.getCreateChat)
router.get('/history', Chat.getHistory)
router.get('/chat/:id', Chat.getChat)

module.exports = router