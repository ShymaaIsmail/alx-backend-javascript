import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      const finalResult = [];
      results.forEach((result) => {
        finalResult.push({
          status: result.status,
          value: result.value !== undefined ? result.value : `Error: ${result.reason.message}`
          ,
        });
      });
      console.log(finalResult);
      return finalResult;
    });
}
