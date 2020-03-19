import MainPromoFilm from './main-promo-film';
import {connect} from "react-redux";
import {getPromoFilm} from "../../reducer/state/selectors";
import {Operation as DataOperation} from "../../reducer/data/data";

const mapStateToProps = (state) => {
  return {
    film: getPromoFilm(state),

  };
};

const mapDispatchToProps = (dispatch) => ({
  addToFavorite(favData) {
    dispatch(DataOperation.addToFavorite(favData));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPromoFilm);
