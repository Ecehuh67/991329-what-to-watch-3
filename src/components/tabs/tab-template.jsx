const TabTemplate = (props) => {
  const {state, tabName} = props;
  const {activeTab, listener} = state;

  return (
    <li
      className={activeTab === tabName ? `movie-nav__item movie-nav__item--active` :
        `movie-nav__item`} onClick={listener}>
      <a href="#" className="movie-nav__link">{tabName}</a>
    </li>
  );
};

export default TabTemplate;

TabTemplate.propTypes = {
  state: PropTypes.shape({
    activeTab: PropTypes.string.isRequired,
    tabsList: PropTypes.arrayOf(PropTypes.string).isRequired,
    listener: PropTypes.func.isRequired
  }).isRequired,
  tabName: PropTypes.string.isRequired
};
