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
export const themeDarkAction = (isDark) => {
  return {
    type: "SET_THEME_DARK",
    payload: isDark,
  };
};
