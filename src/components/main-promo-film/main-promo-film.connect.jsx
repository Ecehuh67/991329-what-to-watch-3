import MainPromoFilm from './main-promo-film';
import {connect} from "react-redux";
import {getPromoFilm} from "../../reducer/state/selectors";
import {Operations as DataOperations} from "../../reducer/data/data";
import {getAuthorizationStatus} from '../../reducer/user/selectors';

const mapStateToProps = (state) => {
  return {
    film: getPromoFilm(state),
    authorizationStatus: getAuthorizationStatus(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  addToFavorite(favData) {
    dispatch(DataOperations.addToFavorite(favData));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPromoFilm);
