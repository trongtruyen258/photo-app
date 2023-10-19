export const listPhotoAction = (listPhoto) => {
  return {
    type: "SET_PHOTOS",
    payload: listPhoto,
  };
};
export const photoSelectedAction = (photo) => {
  return {
    type: "SET_PHOTO_SELECTED",
    payload: photo,
  };
};
