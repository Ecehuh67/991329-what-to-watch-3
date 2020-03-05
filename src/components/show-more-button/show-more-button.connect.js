import {ActionCreator} from "../../actions.js";
import {DEFAULT_GENRE} from '../../utils/consts';
import NameSpace from '../../reducer/name-space';

import {connect} from "react-redux";
import ShowMoreButton from './show-more-button';

const mapStateToProps = (state) => {
  return {
    films: (() => {
      if (state[NameSpace.DATA].chosenGenre === DEFAULT_GENRE) {
        return state[NameSpace.DATA].films;
      }

      return state[NameSpace.DATA].films.slice().filter((film) => film.genre === state[NameSpace.DATA].chosenGenre);
    })(),
    showedFilms: state[NameSpace.DATA].showedFilms,
    filteredFilms: state.filteredFilms
  };
};

const mapDispatchToProps = (dispatch) => ({
  onShowMoreButtonClick() {
    dispatch(ActionCreator.showeMoreFilms());
  }
});

export {mapStateToProps, mapDispatchToProps};
// export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreButton);
