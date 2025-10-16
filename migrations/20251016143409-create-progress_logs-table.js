'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('progress_logs', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      enrollment_id: { 
        type: Sequelize.INTEGER, 
        allowNull: false,
        references: { model: 'enrollments', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      progress: { type: Sequelize.TINYINT },
      note: { type: Sequelize.TEXT },
      logged_at: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      created_at: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updated_at: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('progress_logs');
  }
};
