import {connect} from "react-redux";
import ShowMoreButton from './show-more-button';
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreButton);
