export default function createReportObject(employeesList) {
  const reportObject = {};
  Object.defineProperties(reportObject, {
    allEmployees: {
      value: employeesList,
      writable: true,
      enumerable: true,
    },
    getNumberOfDepartments: {
      value(Employees) {
        return Object.keys(Employees).length;
      },
      enumerable: false,
    },
  });
  return reportObject;
}
