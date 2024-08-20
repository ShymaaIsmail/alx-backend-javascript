const displayMessage = (message) => {
  if (message) {
    process.stdout.write(`${message}\n`);
  } else {
    process.stdout.write('');
  }
};
module.exports = displayMessage;
