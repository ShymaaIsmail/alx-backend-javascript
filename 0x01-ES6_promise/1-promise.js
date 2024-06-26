export default function getFullResponseFromAPI(success) {
  const first_promise = Promise;
  if (success) {
    return first_promise.resolve({
      status: 200,
      body: 'Success',
    });
  }
  return first_promise.reject({
    Error: 'The fake API is not working currently',
  });
}
