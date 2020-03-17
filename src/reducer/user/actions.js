const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_AVATAR: `SET_AVATAR`
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status
    };
  },
  setAvatar: (avatar) => {
    return {
      type: ActionType.SET_AVATAR,
      payload: avatar
    }
  }
};

export {ActionType, ActionCreator};
