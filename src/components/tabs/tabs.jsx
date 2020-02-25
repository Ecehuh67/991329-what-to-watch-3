import TabTemplate from './tab-template';

const Tabs = (props) => {
  const {state, template} = props;
  const {tabsList} = state;

  return (
    <>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {tabsList.map((tab, i) => {
            return (
              <TabTemplate
                state={state}
                tabName={tab}
                key={i}
              />
            );
          })}
        </ul>
      </nav>
      {template}
    </>
  );
};

export default Tabs;

// isRequired - template - how to mock it in JEST?
Tabs.propTypes = {
  template: PropTypes.object,
  state: PropTypes.shape({
    activeTab: PropTypes.string.isRequired,
    tabsList: PropTypes.arrayOf(PropTypes.string).isRequired,
    listener: PropTypes.func.isRequired
  }).isRequired
};
