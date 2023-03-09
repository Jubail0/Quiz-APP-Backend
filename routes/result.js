const express = require('express');
const router = express.Router();
const {calculateResult,showAllResult} = require('../controller/results')

router.post("/result/:id", calculateResult)
router.get("/result", showAllResult)

module.exports = router;