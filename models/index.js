const Student = require('./student.model');
const Instructor = require('./instructor.model');
const Category = require('./category.model');
const Course = require('./course.model');
const Enrollment = require('./enrollment.model');
const ProgressLog = require('./progress_log.model');

// Thiet lap moi quan he Category - Course
Category.hasMany(Course, {foreignKey: 'category_id'});
Course.belongsTo(Category, {foreignKey: 'category_id'});

//Thiet lap moi quan he giua Instructor - Course
Instructor.hasMany(Course, { foreignKey: 'instructor_id' });
Course.belongsTo(Instructor, { foreignKey: 'instructor_id' });

//Thiet lap moi quan he giua Student - Enrollment
Student.hasMany(Enrollment, { foreignKey: 'student_id' });
Enrollment.belongsTo(Student, { foreignKey: 'student_id' });

// Course - Enrollment
Course.hasMany(Enrollment, { foreignKey: 'course_id' });
Enrollment.belongsTo(Course, { foreignKey: 'course_id' });

// Enrollment - ProgressLog
Enrollment.hasMany(ProgressLog, { foreignKey: 'enrollment_id' });
ProgressLog.belongsTo(Enrollment, { foreignKey: 'enrollment_id' });

module.exports = {
  Student,
  Instructor,
  Category,
  Course,
  Enrollment,
  ProgressLog
};