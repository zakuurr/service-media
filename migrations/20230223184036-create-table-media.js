'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.createTable('media', { 
      id: {
        type :Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement: true,
        allowNull: false
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull:true
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull:true
      }
    });
     
  },

  async down (queryInterface, Sequelize) {
   
   await queryInterface.dropTable('media');

  }
};
