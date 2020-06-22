const getFibonacciNumber = require('../services/get-fibonacci-number');
const db = require('../models/index');

const { FibonacciStory } = db;

async function index(request, response) {
  const IP = request.clientIp;

  const data = await FibonacciStory.findAll({
    where: {
      IP,
    },
  });

  response.json(data);
}

async function create(request, response) {
  try {
    const IP = request.clientIp;
    const sequenceNumber = Number(request.body.sequenceNumber);
    const fibonacciNumber = getFibonacciNumber(sequenceNumber);

    const fibonacciStory = await FibonacciStory.create({
      IP,
      sequenceNumber,
      fibonacciNumber,
    });

    response.status(201);
    response.json(fibonacciStory);
  } catch (error) {
    response.status(422);
    response.json(error);
  }
}

module.exports = {
  index,
  create,
};
