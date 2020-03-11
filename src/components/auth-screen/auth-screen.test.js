import AuthScreen from './auth-screen';

describe(`Render FilmsList correctly`, () => {
  it(`Render mock data the right way`, () => {
    const tree = renderer.create(
        <AuthScreen
          onSubmit={() => {}}
          onValidateUser={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
