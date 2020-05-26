module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('FibonacciStories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      IP: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sequenceNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      fibonacciNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('FibonacciStories');
  },
};
