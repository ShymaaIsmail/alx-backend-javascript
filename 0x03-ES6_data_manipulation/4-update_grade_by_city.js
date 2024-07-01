const getStudentWithGrade = (student, grade) => ({
  ...student,
  grade: grade ? grade.grade : 'N/A',
});
const updateStudentGradeByCity = (students, city, newGrades) => students
  .filter((s) => s.location === city)
  .map((s) => getStudentWithGrade(s, newGrades.filter((g) => g.studentId === s.id)[0]));
export default updateStudentGradeByCity;
