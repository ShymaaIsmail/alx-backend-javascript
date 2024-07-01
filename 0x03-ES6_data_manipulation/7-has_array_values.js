const hasValuesFromArray = (set, array) => {
  const arrExistInSet = (new Set(array)).isSubsetOf(set);
  return arrExistInSet;
};
export default hasValuesFromArray;
