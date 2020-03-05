const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  SET_UPLOADED: `SET_UPLOADED`
};

const ActionCreator = {
  loadFilms: (films) => {
    return {
      type: ActionType.LOAD_FILMS,
      payload: films
    };
  },
};

export {ActionType, ActionCreator};
