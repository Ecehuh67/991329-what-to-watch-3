import {reducer} from "./user";
import {ActionType} from './actions';
import {AuthorizationStatus} from "../../utils/consts";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    userAvatar: ``
  });
});

it(`Reducer should change status`, () => {
  expect(reducer(
      {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        userAvatar: ``
      },
      {
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: AuthorizationStatus.AUTH
      })
  ).toEqual(
      {
        authorizationStatus: AuthorizationStatus.AUTH,
        userAvatar: ``
      }
  );
});

it(`Reducer should change avatar`, () => {
  expect(reducer(
      {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        userAvatar: ``
      },
      {
        type: ActionType.SET_AVATAR,
        payload: `/img/try.png`
      })
  ).toEqual(
      {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        userAvatar: `/img/try.png`
      }
  );
});
