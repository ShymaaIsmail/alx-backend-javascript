const weakMap = new WeakMap();
const queryAPI = (endpoint) => {
  if (typeof (endpoint) === 'object') {
    let queries = weakMap.get(endpoint) || 0;
    queries += 1;
    if (queries >= 5) throw new Error('Endpoint load is high');
    else {
      weakMap.set(endpoint, queries);
    }
  }
};
export { weakMap, queryAPI };
