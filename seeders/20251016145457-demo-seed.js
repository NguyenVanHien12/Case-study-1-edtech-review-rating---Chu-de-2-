'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // ===== Categories =====
    await queryInterface.bulkInsert('categories', [
      { name: 'Programming', description: 'Learn coding skills', created_at: new Date(), updated_at: new Date() },
      { name: 'Design', description: 'UI/UX and graphic design', created_at: new Date(), updated_at: new Date() }
    ]);

    // ===== Instructors =====
    await queryInterface.bulkInsert('instructors', [
      { name: 'Alice Smith', email: 'alice@edutech.com', bio: 'Senior developer', created_at: new Date(), updated_at: new Date() },
      { name: 'Bob Lee', email: 'bob@edutech.com', bio: 'UI/UX expert', created_at: new Date(), updated_at: new Date() }
    ]);

    // ===== Courses =====
    await queryInterface.bulkInsert('courses', [
      { course_name: 'JavaScript Basics', description: 'Intro to JS', category_id: 1, instructor_id: 1, created_at: new Date(), updated_at: new Date() },
      { course_name: 'UX Fundamentals', description: 'User experience design', category_id: 2, instructor_id: 2, created_at: new Date(), updated_at: new Date() }
    ]);

    // ===== Students =====
    await queryInterface.bulkInsert('students', [
      { name: 'Charlie', email: 'charlie@student.com', password: '123456', created_at: new Date(), updated_at: new Date() },
      { name: 'Dana', email: 'dana@student.com', password: 'abcdef', created_at: new Date(), updated_at: new Date() }
    ]);

    // ===== Enrollments =====
    await queryInterface.bulkInsert('enrollments', [
      { student_id: 1, course_id: 1, enrolled_at: new Date(), status: 'active', created_at: new Date(), updated_at: new Date() },
      { student_id: 2, course_id: 2, enrolled_at: new Date(), status: 'pending', created_at: new Date(), updated_at: new Date() }
    ]);

    // ===== Progress Logs =====
    await queryInterface.bulkInsert('progress_logs', [
      { enrollment_id: 1, progress: 50, note: 'Halfway done', logged_at: new Date(), created_at: new Date(), updated_at: new Date() },
      { enrollment_id: 2, progress: 10, note: 'Just started', logged_at: new Date(), created_at: new Date(), updated_at: new Date() }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('progress_logs', null, {});
    await queryInterface.bulkDelete('enrollments', null, {});
    await queryInterface.bulkDelete('students', null, {});
    await queryInterface.bulkDelete('courses', null, {});
    await queryInterface.bulkDelete('instructors', null, {});
    await queryInterface.bulkDelete('categories', null, {});
  }
};