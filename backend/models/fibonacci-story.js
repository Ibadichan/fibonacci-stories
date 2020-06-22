module.exports = (sequelize, DataTypes) => {
  const FibonacciStory = sequelize.define(
    'FibonacciStory',
    {
      IP: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIP: true,
        },
      },
      sequenceNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: true,
          isInt: true,
          min: 0,
          max: 10000,
        },
      },
      fibonacciNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {}
  );

  return FibonacciStory;
};
