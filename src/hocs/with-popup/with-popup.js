import Tabs from '../../components/tabs/tabs';
import TabsTemplate from '../../components/tabs/tabs-template.connect';

const BOOKMARKS_LIST = [`Overview`, `Details`, `Reviews`];
const DEFAULT_BOOKMARK = `Overview`;

const withPopup = (Component) => {
  class WithPopup extends React.PureComponent {
    constructor(props) {
      super(props);

      this._onBookmarksChange = this._onBookmarksChange.bind(this);
      this._getTabTemplate = this._getTabTemplate.bind(this);
      this._onAddCommentButtonClick = this._onAddCommentButtonClick.bind(this);

      this.state = {
        activeTab: DEFAULT_BOOKMARK,
        tabsList: BOOKMARKS_LIST,
        listener: this._onBookmarksChange,
        leaveComment: false,
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

    _onAddCommentButtonClick() {
      this.setState({leaveComment: !this.state.leaveComment});
    }

    _onBookmarksChange(evt) {
      this.setState({activeTab: evt.target.text});
    }

    render() {
      const tabDescription = this._getTabTemplate();

      return (
        <Component
          {...this.props}
          onAddCommentButtonClick={this._onAddCommentButtonClick}
          isAddComment={this.state.leaveComment}
        >
          <Tabs
            state={this.state}
            template={tabDescription}
          />
        </Component>
      );
    }
  }

  /* eslint camelcase: ["error", {properties: "never"}] */
  WithPopup.propTypes = {
    film: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          poster_image: PropTypes.string.isRequired,
          preview_image: PropTypes.string.isRequired,
          background_image: PropTypes.string.isRequired,
          background_color: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          rating: PropTypes.number.isRequired,
          scores_count: PropTypes.number.isRequired,
          director: PropTypes.string.isRequired,
          starring: PropTypes.arrayOf(PropTypes.string.isRequired),
          run_time: PropTypes.number.isRequired,
          genre: PropTypes.string.isRequired,
          released: PropTypes.number.isRequired,
          id: PropTypes.number.isRequired,
          is_favorite: PropTypes.bool.isRequired,
          video_link: PropTypes.string.isRequired,
          preview_video_link: PropTypes.string.isRequired,
        })
    )
  };

  return WithPopup;
};

export default withPopup;
