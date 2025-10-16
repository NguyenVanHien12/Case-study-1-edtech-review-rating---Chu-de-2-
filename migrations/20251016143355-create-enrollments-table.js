'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('enrollments', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      student_id: { 
        type: Sequelize.INTEGER, 
        allowNull: false,
        references: { model: 'students', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      course_id: { 
        type: Sequelize.INTEGER, 
        allowNull: false,
        references: { model: 'courses', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      enrolled_at: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      status: { 
        type: Sequelize.ENUM('pending', 'active', 'completed', 'cancelled'),
        allowNull: false,
        defaultValue: 'pending'
      },
      created_at: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updated_at: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('enrollments');
  }
};
