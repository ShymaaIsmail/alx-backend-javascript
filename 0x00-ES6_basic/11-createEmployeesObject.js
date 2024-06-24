export default function createEmployeesObject(departmentName, employees) {
  const employee = {};
  Object.defineProperty(employee, departmentName, {
    value: employees,
    writable: false,
    enumerable: true,
  });
  return employee;
}
