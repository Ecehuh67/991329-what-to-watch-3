export const DEFAULT_GENRE = `All genres`;
export const DEFAULT_SHOWED_FILMS = 8;
export const DEFAULT_GENRES_AMOUNT = 9;
export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const AppRoute = {
  MAIN: `/`,
  SIGN_IN: `/login`,
  MY_LIST: `/mylist`,
  FILM: (id) => `/films/${id}`,
  PLAYER: (id) => `/player/${id}`,
  REVIEW: (id) => `/films/${id}/review`
}

export const EstimateValue = {
  3: "Bad",
  5: "Normal",
  8: "Good",
  10: "Very good",
  11: "Awesome"
};
