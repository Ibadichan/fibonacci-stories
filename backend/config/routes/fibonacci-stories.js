const express = require('express');
const FibonacciStories = require('../../controllers/fibonacci-stories');

const router = express.Router();

router.get('/', FibonacciStories.index);
router.post('/', FibonacciStories.create);

module.exports = router;
