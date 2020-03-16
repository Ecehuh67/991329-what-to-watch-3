import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppRoute, AuthorizationStatus} from "../../utils/consts";
import {getAuthorizationStatus} from "../../reducer/user/selectors";

const PrivateRoute = (props) => {
  const {render, path, exact, authorizationStatus} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={(props) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH ? render(props) : <Redirect to={AppRoute.SIGN_IN}/>
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default PrivateRoute;
