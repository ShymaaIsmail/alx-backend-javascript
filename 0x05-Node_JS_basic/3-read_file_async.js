const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== ''); // Remove empty lines

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const fields = {};
    let totalStudents = 0;

    // eslint-disable-next-line no-plusplus
    for (let i = 1; i < lines.length; i++) { // Start from 1 to skip header
      const [firstname, , , field] = lines[i].split(',');

      if (field) {
        totalStudents += 1;
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }
    }

    console.log(`Number of students: ${totalStudents}`);

    for (const [field, students] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
