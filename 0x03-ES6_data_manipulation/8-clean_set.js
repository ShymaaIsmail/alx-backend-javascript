const cleanSet = (set, startString) => {
  const cleanText = [...set].reduce((accumulator, currentValue) => {
    if (startString.length > 0) {
      if (currentValue.startsWith(startString)) {
        const cleanedValue = currentValue.replace(startString, '');
        if (accumulator.length === 0) {
          return cleanedValue;
        }
        return `${accumulator}-${cleanedValue}`;
      }
    }
    return accumulator;
  }, '');
  return cleanText;
};
export default cleanSet;
