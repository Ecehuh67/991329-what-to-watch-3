import {extend} from "../../utils/utils";
import {ActionType, ActionCreator} from './actions';

import {AuthorizationStatus} from '../../utils/consts';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      })
      .catch((err) => {
        throw err;
      });
  },
  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.email,
      password: authData.password,
    })
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      });
  },
  postComment: (commentData) => (dispatch, getState, api) => {
    return api.post(`/comments/${commentData.id}`, {
      rating: commentData.rating,
      comment: commentData.comment
    })
      .then(() => {
        // there will be smth -)
      })
      .catch((err) => {
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
  }

  return state;
};

export {reducer, Operation};
