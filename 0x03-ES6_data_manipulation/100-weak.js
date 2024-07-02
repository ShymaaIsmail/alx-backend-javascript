const weakMap = new WeakMap();
const queryAPI = (endpoint) => {
  let queries = weakMap.get(endpoint);
  if (queries >= 5) throw new Error('Endpoint load is high');
  else {
    queries = queries === undefined ? 1 : queries + 1;
    weakMap.set(endpoint, queries);
  }
};
export { weakMap, queryAPI };
