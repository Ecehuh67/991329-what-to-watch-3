const AMOUT_SIMILAR_FILMS = 4;

export const getRandomNumber = (max) => {
  return 1 + Math.floor(Math.random() * max);
};

export const getSimilarFilms = (films, targetFilm) => {
  const index = films.map((it) => it.title).indexOf(targetFilm.title);
  const newList = [].concat(films.slice(0, index), films.slice(index + 1));

  return newList
    .slice()
    .filter((movie) => movie.genre === targetFilm.genre)
    .slice(0, AMOUT_SIMILAR_FILMS);
};
