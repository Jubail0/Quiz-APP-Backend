const express = require('express');
const router = express.Router();
const addUserName = require('../controller/user');

router.post("/", addUserName)

module.exports = router;