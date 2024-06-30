export default function createIteratorObject(report) {
  const departments = report.allEmployees;
  const keys = Object.keys(departments);
  let deptIndex = 0;
  let empIndex = 0;

  const iterator = {
    [Symbol.iterator]() {
      return {
        next: () => {
          while (deptIndex < keys.length) {
            const currentDeptEmployees = departments[keys[deptIndex]];
            if (empIndex < currentDeptEmployees.length) {
              const value = currentDeptEmployees[empIndex];
              empIndex += 1;
              return { value, done: false };
            }
            deptIndex += 1;
            empIndex = 0;
          }
          return { value: undefined, done: true };
        },
      };
    },
  };

  return iterator;
}
