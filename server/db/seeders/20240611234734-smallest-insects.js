"use strict";

const { Insect } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await Insect.bulkCreate(
      [
        {
          name: "Western Pygmy Blue Butterfly",
          description: "something",
          territory: "somewhere",
          fact: "I don't know",
          millimeters: 0.3,
        },
        {
          name: "Patu Digua Spider",
          description: "something",
          territory: "somewhere",
          fact: "I don't know",
          millimeters: 0.6,
        },
        {
          name: "Scarlet Dwarf Dragonfly",
          description: "something",
          territory: "somewhere",
          fact: "I don't know",
          millimeters: 0.3,
        },
      ],
      { validate: true }
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(
      "Insects",
      [
        {
          name: [
            "Western Pygmy Blue Butterfly",
            "Patu Digua Spider",
            "Scarlet Dwarf Dragonfly",
          ],
        },
      ],
      {}
    );
  },
};
