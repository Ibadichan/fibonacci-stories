module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'FibonacciStories',
      [
        {
          IP: '151.18.183.176',
          sequenceNumber: 7,
          fibonacciNumber: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          IP: '151.18.183.176',
          sequenceNumber: 3,
          fibonacciNumber: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          IP: '151.18.183.176',
          sequenceNumber: 9,
          fibonacciNumber: 34,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('FibonacciStories', null, {});
  },
};
