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
          max: 2222,
          min: 0,
        },
      },
      fibonacciNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: true,
          isInt: true,
        },
      },
    },
    {}
  );

  return FibonacciStory;
};
