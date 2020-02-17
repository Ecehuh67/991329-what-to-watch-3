import {PureComponent} from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from '../main-page/main-page';
import Popup from '../popup/popup';

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = null;
    this._onDataChange = this._onDataChange.bind(this);
  }

  _onDataChange(value) {
    this.setState(value);
  }

  _renderApp() {
    const {films} = this.props;

    if (this.state === null) {
      return (
        <MainPage
          films={films}
          onDataChange={this._onDataChange}
        />
      );
    } else {
      return (
        <Popup
          film={this.state}
        />
      );
    }
  }

  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/popup">
            <Popup
              film={this.state}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
      })
  ).isRequired
};
