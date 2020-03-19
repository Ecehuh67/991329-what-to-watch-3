import NameSpace from "../name-space";

export const getAuthorizationStatus = (state) => {
};

export const getAvatar = (state) => {
  return state[NameSpace.USER].userAvatar;
};
