const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ProgressLog = sequelize.define('ProgressLog', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    enrollment_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    progress: {
        type: DataTypes.TINYINT
    },
    note: {
        type: DataTypes.TEXT
    },
    logged_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'progess_logs',
    timestamps: true,
    underscored: true
});

module.exports = ProgressLog;