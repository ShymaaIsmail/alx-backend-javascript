const getStudentIdsSum = (students) => students.map((s) => s.id)
  .reduce((total, current) => total + current);
export default getStudentIdsSum;
