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
};

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
};

export const getAttrDate = (date) => {
  const month = date.getMonth();
  const day = date.getDay();
  const year = date.getFullYear();

  return `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
};

export const getNewData = (newElement, arrayData) => {
  const newIndex = arrayData.findIndex((movie) => movie.id === newElement.id);
  const newData = arrayData.slice(0, newIndex).concat(arrayData.slice(newIndex + 1)).concat(newElement).sort((a, b) => a.id - b.id);

  return newData;
};

export const sortData = (newElement, arrayData) => {
  const newIndex = arrayData.findIndex((movie) => movie.id === newElement.id);
  const oldData = arrayData;

  if (newIndex === -1) {
    oldData.push(newElement);
  } else {
    oldData.splice(newIndex, 1);
  }

  return oldData;
};

export const getRank = (count) => {
  let rank;

  switch (true) {
    case count > 10:
      rank = `Awesome`;
      break;
    case count > 8 && count <= 10:
      rank = `Very good`;
      break;
    case count > 5 && count <= 8:
      rank = `Good`;
      break;
    case count > 3 && count <= 5:
      rank = `Normal`;
      break;
    case count > 0 && count <= 3:
      rank = `Bad`;
      break;
  }

  return rank;
};
