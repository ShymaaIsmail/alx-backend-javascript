const hasValuesFromArray = (set, array) => {
  const arrExistInSet = set.isSupersetOf((new Set(array)));
  return arrExistInSet;
};
export default hasValuesFromArray;
