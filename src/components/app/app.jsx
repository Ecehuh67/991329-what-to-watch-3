import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from '../main-page/main-page';
import Popup from '../popup/popup';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = null;
    this.similarFilms = [];

    this._onDataChange = this._onDataChange.bind(this);
    this._getSimilarFilms = this._getSimilarFilms.bind(this);
  }

  _onDataChange(value) {
    this.setState(value);
  }

  _getSimilarFilms(list) {
    this.similarFilms = list;
  }

  _renderApp() {
    const {films} = this.props;

    if (this.state === null) {
      return (
        <MainPage
          films={films}
          onDataChange={this._onDataChange}
          getSimilarFilms={this._getSimilarFilms}
        />
      );
    }

    return (
      <Popup
        film={this.state}
        similarFilms={this.similarFilms}
      />
    );
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
              similarFilms={this.similarFilms}
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
