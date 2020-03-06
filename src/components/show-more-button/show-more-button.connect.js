import {ActionCreator} from '../../reducer/state/actions';

import {
  getShowedFilmsCount,
  getFilteredGenreFilms
} from '../../reducer/state/selectors';

const mapStateToProps = (state) => {
  return {
    films: getFilteredGenreFilms(state),
    showedFilms: getShowedFilmsCount(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onShowMoreButtonClick() {
    dispatch(ActionCreator.showeMoreFilms());
  }
});

export {mapStateToProps, mapDispatchToProps};
