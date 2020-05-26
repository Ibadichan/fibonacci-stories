const express = require('express');
const FibonacciStories = require('../../controllers/FibonacciStories');

const router = express.Router();

router.get('/', FibonacciStories.index);
router.post('/', FibonacciStories.create);

module.exports = router;
