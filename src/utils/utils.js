const AMOUT_SIMILAR_FILMS = 4;

export const getRandomNumber = (max) => {
  return 1 + Math.floor(Math.random() * max);
};

export const getSimilarFilms = (films, targetFilm) => {
  if (targetFilm === undefined) {
    return null;
  }
  const index = films.map((it) => it.id).indexOf(targetFilm);
  const targetGenre = films[index].genre
  const newList = [].concat(films.slice(0, index), films.slice(index + 1));

  return newList
    .slice()
    .filter((movie) => movie.genre === targetGenre)
    .slice(0, AMOUT_SIMILAR_FILMS);
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};
