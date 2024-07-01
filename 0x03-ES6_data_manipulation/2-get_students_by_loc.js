const getStudentsByLocation = (students, city) => students.filter((s) => s.location === city);
export default getStudentsByLocation;
