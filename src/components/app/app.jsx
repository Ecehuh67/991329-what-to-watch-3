import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from '../main-page/main-page';
import Popup from '../popup/popup';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = null;
    this.similarFilms = [];

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
    }

    return (
      <Popup
        film={this.state}
        films={films}
        onDataChange={this._onDataChange}
      />
    );
  }

  render() {
    const {films} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/popup">
            <Popup
              film={this.state}
              films={films}
              onDataChange={this._onDataChange}
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
        image: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired
      })
  ).isRequired
};
