import Filters from './filters';
import {connect} from "react-redux";
import {ActionCreator} from '../../reducer/state/actions';

import {
  getChosenGenre,
  getListGenres
} from '../../reducer/state/selectors';

const mapStateToProps = (state) => {
  return {
    chosenGenre: getChosenGenre(state),
    listGenres: getListGenres(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  onFilterClick(genre) {
    dispatch(ActionCreator.changeFilteredGenre(genre));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
