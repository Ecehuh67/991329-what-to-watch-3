import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import reducer from "./reducer/reducer";
import {createAPI} from './api';
import {Operation as DataOperation} from './reducer/data/data';
import thunk from "redux-thunk";

const api = createAPI();

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);

export {store};
