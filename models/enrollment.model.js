const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Enrollment = sequelize.define('Enrollment', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    student_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    course_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    enrolled_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    status: { 
        type: DataTypes.ENUM('pending', 'active', 'completed', 'cancelled'),
        allowNull: false,
        defaultValue: 'pending'
    }
}, {
    tableName: 'enrollments',
    timestamps: true,
    underscored: true
});

module.exports = Enrollment;