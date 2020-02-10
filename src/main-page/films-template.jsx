import React from 'react';

const MAX_COUNT_KEY_ID = 10000;

export const getRandomNumber = (max) => {
  return 1 + Math.floor(Math.random() * max);
};

const createFilmMarkup = (filmTitle, handler) => {

  const poster = filmTitle.toLowerCase().replace(/ /g, `-`);
  const pictureLink = `img/${poster}.jpg`;
  const keyId = getRandomNumber(MAX_COUNT_KEY_ID);

  return (
    <article className="small-movie-card catalog__movies-card" key={keyId}>
      <div className="small-movie-card__image">
        <img src={pictureLink} alt={filmTitle} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title" onClick={handler}>
        <a className="small-movie-card__link" href="movie-page.html">{filmTitle}</a>
      </h3>
    </article>
  );
};

export const createFilmsTemplate = (filmsList, clickHandler) => {
  const filmsMarkup = filmsList.map((film) => createFilmMarkup(film, clickHandler));

  return (
    <>
      {filmsMarkup}
    </>
  );
};
