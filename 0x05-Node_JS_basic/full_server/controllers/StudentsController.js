const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const database = await readDatabase('./database.csv');
      let response = 'This is the list of our students\n';

      const fields = Object.keys(database).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

      fields.forEach(field => {
        const students = database[field];
        response += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      });

      res.status(200).send(response.trim());
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const database = await readDatabase('./database.csv');
      if (!database[major]) {
        return res.status(200).send('List:');
      }

      const students = database[major];
      res.status(200).send(`List: ${students.join(', ')}`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

module.exports = { StudentsController };
