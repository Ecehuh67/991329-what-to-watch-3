const Tabs = (props) => {
  const {state, template} = props;
  const {tabsList} = state;

  return (
    <>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {tabsList.map((tab, i) => {
            return (
              <li
                className={state.activeTab === tab ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}
                onClick={state.listener}
                key={i}
              >
                <a href="#" className="movie-nav__link">{tab}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      {template}
    </>
  );
};

// isRequired - template - how to test it in JEST?
Tabs.propTypes = {
  template: PropTypes.object,
  state: PropTypes.shape({
    activeTab: PropTypes.string.isRequired,
    tabsList: PropTypes.arrayOf(PropTypes.string).isRequired,
    listener: PropTypes.func.isRequired
  }).isRequired
};

export default Tabs;
