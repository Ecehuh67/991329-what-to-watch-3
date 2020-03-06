import {ActionCreator} from '../../reducer/state/actions';
import {DEFAULT_GENRE} from '../../utils/consts';
import NameSpace from '../../reducer/name-space';
import ShowMoreButton from './show-more-button';
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
