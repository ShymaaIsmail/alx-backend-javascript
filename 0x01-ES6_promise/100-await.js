import { uploadPhoto, createUser } from './utils';

const asyncUploadUser = (async () => {
  const result = {
    photo: null,
    user: null,
  };
  const photoResult = await uploadPhoto();
  const userResult = await createUser();
  result.photo = photoResult;
  result.user = userResult;
  return result;
});
export default asyncUploadUser;
