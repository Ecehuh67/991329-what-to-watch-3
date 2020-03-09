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
