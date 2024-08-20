const fs = require('fs').promises;

function readDatabase(filePath) {
  return fs.readFile(filePath, 'utf8')
    .then(data => {
      const lines = data.split('\n');
      const result = {};

      lines.forEach(line => {
        const [firstName, field] = line.split(',');
        if (firstName && field) {
          const trimmedField = field.trim();
          if (!result[trimmedField]) {
            result[trimmedField] = [];
          }
          result[trimmedField].push(firstName.trim());
        }
      });

      return result;
    })
    .catch((error) => Promise.reject(new Error(`Cannot load the database: ${error.message}`)));
}

module.exports = { readDatabase };
