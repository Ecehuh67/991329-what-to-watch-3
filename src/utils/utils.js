const MONTHS = {
  0: `January`,
  1: `February`,
  2: `March`,
  3: `April`,
  4: `May`,
  5: `June`,
  6: `Juily`,
  7: `Augest`,
  8: `September`,
  9: `October`,
  10: `November`,
  11: `December`
}

export const getRandomNumber = (max) => {
  return 1 + Math.floor(Math.random() * max);
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const convertTime = (duration) => {
  const hours = Math.floor(duration / 60);
  const minutes = Math.round((duration / 60 - hours) * 60);

  return (
    `${hours}h ${minutes}m`
  );
};

export const convertTimeToProgressBar = (duration) => {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration - hours * 3600) / 60);
  const seconds = Math.round(duration - hours * 3600 - minutes * 60);
  return (
    `${hours}:${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
  );
};

export const getCommentDate = (date) => {
  const month = date.getMonth();
  const day = date.getDay();
  const year = date.getFullYear();

  return `${MONTHS[month]} ${day}, ${year}`;
}

export const getAttrDate = (date) => {
  const month = date.getMonth();
  const day = date.getDay();
  const year = date.getFullYear();

  return `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
}
