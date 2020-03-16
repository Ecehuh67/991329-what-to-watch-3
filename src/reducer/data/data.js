import {extend} from "../../utils/utils";
import {ActionType, ActionCreator} from './actions';

const initialState = {
  films: [],
  favorites: [],
  promoFilm: {},
  comments: [],
  isUploaded: false,
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.loadFilms(response.data));
      });
  },
  loadPromoFilm: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(ActionCreator.loadPromoFilm(response.data));
      });
  },
  loadComments: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`)
      .then((response) => {
        dispatch(ActionCreator.loadComments(response.data));
      });
  },
  loadFavorites: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        dispatch(ActionCreator.loadFavorites(response.data));
      });
  },
  postComment: (commentData) => (dispatch, getState, api) => {
    return api.post(`/comments/${commentData.id}`, {
      rating: commentData.rating,
      comment: commentData.comment
    })
      .then((response) => {
        dispatch(ActionCreator.updateComments(response.data));
      })
      .catch((err) => {
      });
  },
  addToFavorite: (favData) => (dispatch, getState, api) => {
    return api.post(`/favorite/${favData.id}/${favData.status}`)
      .then((response) => {
        // dispatch(ActionCreator.updateFavorites(response.data));
      })
      .catch((err) => {

      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(
          state,
          {
            films: action.payload,
            isUploaded: true
          }
      );
    case ActionType.LOAD_PROMO_FILM:
      return extend(
          state,
          {
            promoFilm: action.payload,
          }
      );
    case ActionType.LOAD_COMMENTS:
      return extend(
          state,
          {
            comments: action.payload,
          }
      );
    case ActionType.LOAD_FAVORITES:
      return extend(
          state,
          {
            favorites: action.payload,
          }
      );
    case ActionType.UPDATE_COMMENTS:
      return extend(
          state,
          {
            comments: action.payload
          }
      );
    case ActionType.ADD_TO_FAVORITES:
      return state;
    // case ActionType.UPDATE_FAVORITES:
    // return extend(
    //     state,
    //     {
    //       smth: action.payload
    //     }
    // );
  }

  return state;
};

export {reducer, Operation};
