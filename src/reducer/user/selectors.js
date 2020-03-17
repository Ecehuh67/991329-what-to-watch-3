import NameSpace from "../name-space";

export const getAuthorizationStatus = (state) => {
  return state[NameSpace.USER].authorizationStatus;
};

export const getAvatar = (state) => {
  return state[NameSpace.USER].userAvatar;
}
