const express = require('express');
const router = express.Router();
const getQuestionsApi = require('../controller/questions')


  router.get("/quiz", getQuestionsApi)

module.exports = router;