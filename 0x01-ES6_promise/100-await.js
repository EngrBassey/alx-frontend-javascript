import { uploadPhoto, createUser } from './utils';

const asyncUploadUser = async () => {
  let result = {};
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    result = { photo, user };
  } catch (err) {
    result = { photo: null, user: null };
  }
  return result;
};

export default asyncUploadUser;
