const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  LOAD_FAVORITES: `LOAD_FAVORITES`,
  UPDATE_COMMENTS: `UPDATE_COMMENTS`,
  ADD_TO_FAVORITES: `ADD_TO_FAVORITES`,
  UPDATE_FAVORITES: `UPDATE_FAVORITES`
};

const ActionCreator = {
  loadFilms: (films) => {
    return {
      type: ActionType.LOAD_FILMS,
      payload: films
    };
  },
  loadPromoFilm: (film) => {
    return {
      type: ActionType.LOAD_PROMO_FILM,
      payload: film
    };
  },
  loadComments: (id) => {
    return {
      type: ActionType.LOAD_COMMENTS,
      payload: id
    };
  },
  loadFavorites: (films) => {
    return {
      type: ActionType.LOAD_FAVORITES,
      payload: films
    };
  },
  updateComments: (comments) => {
    return {
      type: ActionType.UPDATE_COMMENTS,
      payload: comments
    }
  },
  // addToFavorite: (favoriteData) => {
  //   return {
  //     type: ActionType.ADD_TO_FAVORITES,
  //     payload: favoriteData
  //   }
  // },
  // updateFavorites: (resp) => {
  //   return {
  //     type: ActionType.UPDATE_FAVORITES,
  //     payload: resp
  //   }
  // }
};

export {ActionType, ActionCreator};
