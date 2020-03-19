import {extend} from "../../utils/utils";
import {ActionType, ActionCreator} from './actions';
import {AuthorizationStatus} from '../../utils/consts';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userAvatar: ``
};

const Operation = {
  checkAuth: (handler) => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        // there must be an avatar which got form server - response.data.avatar_url
        const downloadedAvatar = `/img/avatar.jpg`;
        dispatch(ActionCreator.setAvatar(downloadedAvatar));
        handler();
      })
      .catch((err) => {
        throw err;
      });
  },
  login: (authData, favHandler, filmsHandler, promoHandler) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.email,
      password: authData.password,
    })
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));

        // there must be an avatar which got form server - response.data.avatar_url
        const downloadedAvatar = `/img/avatar.jpg`;
        dispatch(ActionCreator.setAvatar(downloadedAvatar));
      })
      .then(() => {
        favHandler();
        // favHandler();
        filmsHandler();
        promoHandler();
      })
      .catch(() => {
        favHandler();
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(
          state,
          {
            authorizationStatus: action.payload
          }
      );
    case ActionType.SET_AVATAR:
      return extend(
          state,
          {
            userAvatar: action.payload
          }
      );
  }

  return state;
};

export {reducer, Operation};
