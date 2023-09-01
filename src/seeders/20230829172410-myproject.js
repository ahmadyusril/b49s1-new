'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'user', 
  [
    {
      name: 'Dumbways Mobile App - 2023',
      start_date: "2023-08-27",
      end_date: "2023-11-27",
      description: "Test Seeder 1",
      technologies: ["node, react"],
      image: "/image/stray1.png",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Dumbways Mobile App - 2023',
      start_date: "2023-08-27",
      end_date: "2023-11-27",
      description: "Test Seeder 2",
      technologies: ["node"],
      image: "/image/stray2.png",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Dumbways Mobile App - 2023',
      start_date: "2023-08-27",
      end_date: "2023-11-27",
      description: "Test Seeder 3",
      technologies: ["react"],
      image: "/image/stray3.png",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], 
  {}
  );
},

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user', null, {});
  }
};