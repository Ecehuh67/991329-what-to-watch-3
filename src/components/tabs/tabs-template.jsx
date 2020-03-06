import TabDetail from "./tab-detail-template";
import TabOverview from "./tab-overview-template";
import TabReviews from "./tab-reviews-template";

const TabsTemplate = (props) => {
  const {tabsList, activeTab, film} = props;

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
        />
      );
  }
  return null;
};

export default TabsTemplate;

TabsTemplate.propTypes = {
  tabsList: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTab: PropTypes.string.isRequired,
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired
  })
};
