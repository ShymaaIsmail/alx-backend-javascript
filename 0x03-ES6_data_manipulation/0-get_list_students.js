function createStudent(id, firstName, location) {
  return {
    id,
    firstName,
    location,
  };
}
export default function getListStudents() {
  return [
    createStudent(1, 'Guillaume', 'San Francisco'),
    createStudent(2, 'James', 'Columbia'),
    createStudent(5, 'Serena', 'San Francisco'),
  ];
}
