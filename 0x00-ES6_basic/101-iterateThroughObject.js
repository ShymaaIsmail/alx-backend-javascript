export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  let isFirst = true;

  for (const item of reportWithIterator) {
    if (!isFirst) {
      result += ' | ';
    }
    result += `${item}`;
    isFirst = false;
  }
  return result;
}
