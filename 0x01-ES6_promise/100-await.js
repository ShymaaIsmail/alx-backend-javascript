import { uploadPhoto, createUser } from './utils';

const asyncUploadUser = (async () => {
  const result = {
    photo: null,
    user: null,
  };
  try {
    const photoResult = await uploadPhoto();
    const userResult = await createUser();
    result.photo = photoResult;
    result.user = userResult;
  } catch (error) {
    result.photo = null;
    result.user = null;
  }
  return result;
});
export default asyncUploadUser;
