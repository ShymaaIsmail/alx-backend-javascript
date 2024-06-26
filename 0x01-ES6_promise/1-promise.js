export default function getFullResponseFromAPI(success) {
  const firstPromise = Promise;
  if (success === true) {
    return firstPromise.resolve({
      status: 200,
      body: 'Success',
    });
  }
  return firstPromise.reject(new Error('The fake API is not working currently'));
}
