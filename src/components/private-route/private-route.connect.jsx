import PrivateRoute from './private-route';
import {connect} from "react-redux";
import {getAuthorizationStatus} from '../../reducer/user/selectors';

const mapStateToProps = (state) => {
  return {
    authorizationStatus: getAuthorizationStatus(state)
  };
};

export default connect(mapStateToProps)(PrivateRoute);
