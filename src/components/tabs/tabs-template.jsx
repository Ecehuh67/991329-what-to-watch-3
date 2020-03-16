import TabDetail from "./tab-detail-template";
import TabOverview from "./tab-overview-template";
import TabReviews from "./tab-reviews-template";

const TabsTemplate = (props) => {
  const {tabsList, activeTab, film, comments} = props;

  switch (activeTab) {
    case tabsList[0]:
      return (
        <TabOverview
          film={film}
        />
      );
    case tabsList[1]:
      return (
        <TabDetail
          film={film}
        />
      );
    case tabsList[2]:
      return (
        <TabReviews
          film={film}
          comments={comments}
        />
      );
  }
  return null;
};

/* eslint camelcase: ["error", {properties: "never"}] */
TabsTemplate.propTypes = {
  tabsList: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTab: PropTypes.string.isRequired,
  film: PropTypes.shape({
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
  }).isRequired,
};

export default TabsTemplate;
