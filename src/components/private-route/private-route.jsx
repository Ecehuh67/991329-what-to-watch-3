import {Route, Redirect} from "react-router-dom";
import {AppRoute, AuthorizationStatus} from "../../utils/consts";

const PrivateRoute = (props) => {
  const {render, path, exact, authorizationStatus} = props;

  return (
    <Route
      path={path}
      exact={exact}
      /* eslint-disable-next-line no-shadow */
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
