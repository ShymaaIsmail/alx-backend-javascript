const cleanSet = (set, startString) => {
  let cleanText = '';
  if ((set instanceof Set) && typeof startString === 'string' && startString.length > 0) {
    cleanText = [...set].reduce((accumulator, currentValue) => {
      if (typeof currentValue === 'string' && currentValue.startsWith(startString)) {
        const cleanedValue = currentValue.replace(startString, '');
        if (accumulator.length === 0) {
          return cleanedValue;
        }
        return `${accumulator}-${cleanedValue}`;
      }
      return accumulator;
    }, '');
  }
  return cleanText;
};
export default cleanSet;
