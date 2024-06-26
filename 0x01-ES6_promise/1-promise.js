export default function getFullResponseFromAPI(success) {
  const firstPromise = Promise;
  if (success) {
    return firstPromise.resolve({
      status: 200,
      body: 'Success',
    });
  }
  return firstPromise.reject({
    Error: 'The fake API is not working currently',
  });
}
