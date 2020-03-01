import {ActionCreator} from "../../actions.js";
import {DEFAULT_GENRE} from '../../utils/consts';

// import {connect} from "react-redux";
// import ShowMoreButton from './show-more-button';

const mapStateToProps = (state) => {
  return {
    films: (() => {
      if (state.chosenGenre === DEFAULT_GENRE) {
        return state.films;
      }

      return state.films.slice().filter((film) => film.genre === state.chosenGenre);
    })(),
    showedFilms: state.showedFilms,
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
