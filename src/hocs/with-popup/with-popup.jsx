import Tabs from '../../components/tabs/tabs';
import TabsTemplate from '../../components/tabs/tabs-template';

const BOOKMARKS_LIST = [`Overview`, `Details`, `Reviews`];
const DEFAULT_BOOKMARK = `Overview`;

const withPopup = (Component) => {
  class WithPopup extends React.PureComponent {
    constructor(props) {
      super(props);

      this._onBookmarksChange = this._onBookmarksChange.bind(this);
      this._getTabTemplate = this._getTabTemplate.bind(this);

      this.state = {
        activeTab: DEFAULT_BOOKMARK,
        tabsList: BOOKMARKS_LIST,
        listener: this._onBookmarksChange
      };
    }

    _getTabTemplate() {
      const {film} = this.props;

      return (
        <TabsTemplate
          activeTab={this.state.activeTab}
          tabsList={this.state.tabsList}
          film={film}
        />
      );
    }

    _onBookmarksChange(evt) {
      this.setState({activeTab: evt.target.text});
    }

    render() {
      const tabDescription = this._getTabTemplate();

      return (
        <Component
          {...this.props}
        >
          <Tabs
            state={this.state}
            template={tabDescription}
          />
        </Component>
      );
    }
  }

  WithPopup.propTypes = {
    film: PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      preview: PropTypes.string.isRequired
    }),
    films: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          image: PropTypes.string.isRequired
        })
    ).isRequired,
    onDataChange: PropTypes.func.isRequired
  };

  return WithPopup;
};

export default withPopup;
