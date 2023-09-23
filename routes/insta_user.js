const express = require('express');
const router = express.Router();
const instaUserController = require('../controller/insta_users')


router.get('/user/:userName', instaUserController.findUserName);
router.post('/user', instaUserController.createUser);


module.exports = router;