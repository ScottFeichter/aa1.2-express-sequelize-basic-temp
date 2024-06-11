"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Insect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Insect.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          titleCased(value) {
            const words = value.split(" ");
            for (let word of words) {
              if (
                word[0] !== word[0].toUpperCase() ||
                word.slice(1) !== word.slice(1).toLowerCase()
              ) {
                throw new Error("Words need to be title cased");
              }
              // for (let i = 1; i < word.length; i++) {
              //   if (word[i] !== word[i].toLowerCase()) {
              //     throw new Error("Words need to be title cased");
              //   }
              // }
            }
          },
        },
      },
      description: DataTypes.STRING,
      territory: DataTypes.STRING,
      fact: {
        type: DataTypes.STRING,
        validate: { len: [0, 240] },
      },
      millimeters: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: { min: 0 },
      },
    },
    {
      sequelize,
      modelName: "Insect",
    }
  );
  return Insect;
};
