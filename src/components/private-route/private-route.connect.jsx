import {connect} from "react-redux";
import PrivateRoute from './private-route';
import {getAuthorizationStatus} from '../../reducer/user/selectors';

const mapStateToProps = (state) => {
  console.log(getAuthorizationStatus(state))
  return {
    authorizationStatus: getAuthorizationStatus(state)
  };
};

export default connect(mapStateToProps)(PrivateRoute);
