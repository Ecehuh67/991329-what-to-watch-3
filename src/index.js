import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.connect';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import reducer from "./reducer/reducer";
import {AuthorizationStatus} from './utils/consts';
import {ActionCreator} from './reducer/user/actions';
import history from './history';
import {AppRoute} from './utils/consts';

import {createAPI} from './api';
import thunk from "redux-thunk";

const onUnauthorized = () => {
  history.push(AppRoute.SIGN_IN);
  // store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
