const GENRES = [`Drama`, `Comedy`, `Horror`, `Crime`, `Romance`];

const FILMS = [
  `The Shawshank Redemption`,
  `The Green Mile `,
  `Forrest Gump `,
  `Schindler's List`,
  `Intouchables`,
  `Inception`,
  `Léon`,
  `The Lion King`,
  `Fight Club `,
  `La vita è bella`,
  `Knockin' on Heaven's Door `,
  `The Godfather`,
  `Pulp Fiction`];

const generateGenre = (genresList) => {
  const randomElement = Math.floor(Math.random() * genresList.length);

  return genresList[randomElement];
};
//
// export const films = [
//   {
//     title: generateGenre(FILMS),
//     image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
//     preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
//     genre: generateGenre(GENRES)
//   },
//   {
//     title: generateGenre(FILMS),
//     image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
//     preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
//     genre: generateGenre(GENRES)
//   },
//   {
//     title: generateGenre(FILMS),
//     image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
//     preview: `https://www.videvo.net/videvo_files/converted/2013_12/preview/CROWD_JUMPS_LIGHTS_PULSE.mov15296.webm`,
//     genre: generateGenre(GENRES)
//   },
//   {
//     title: generateGenre(FILMS),
//     image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
//     preview: `https://www.videvo.net/videvo_files/converted/2016_01/preview/Smoke_Light_08_Videvo.mov45734.webm`,
//     genre: generateGenre(GENRES)
//   },
//   {
//     title: generateGenre(FILMS),
//     image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
//     preview: `https://cdn.videvo.net/videvo_files/converted/2018_07/preview/180607_A_064.mp429860.webm`,
//     genre: generateGenre(GENRES)
//   },
//   {
//     title: generateGenre(FILMS),
//     image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
//     preview: `https://cdn.videvo.net/videvo_files/video/free/2019-03/small_watermarked/181015_Extra_DanangDrone_004_preview.webm`,
//     genre: generateGenre(GENRES)
//   },
//   {
//     title: generateGenre(FILMS),
//     image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
//     preview: `https://cdn.videvo.net/videvo_files/video/free/2019-05/small_watermarked/190404_04_KaninBovec_Drone_001_preview.webm`,
//     genre: generateGenre(GENRES)
//   },
//   {
//     title: generateGenre(FILMS),
//     image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
//     preview: `https://cdn.videvo.net/videvo_files/video/free/2019-07/small_watermarked/190625_04_CityMisc_HD_05_preview.webm`,
//     genre: generateGenre(GENRES)
//   },
//   {
//     title: generateGenre(FILMS),
//     image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
//     preview: `https://cdn.videvo.net/videvo_files/video/free/2019-07/small_watermarked/190625_04_CityMisc_HD_05_preview.webm`,
//     genre: generateGenre(GENRES)
//   },
//   {
//     title: generateGenre(FILMS),
//     image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
//     preview: `https://cdn.videvo.net/videvo_files/video/free/2019-07/small_watermarked/190625_04_CityMisc_HD_05_preview.webm`,
//     genre: generateGenre(GENRES)
//   },
//   {
//     title: generateGenre(FILMS),
//     image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
//     preview: `https://cdn.videvo.net/videvo_files/video/free/2019-07/small_watermarked/190625_04_CityMisc_HD_05_preview.webm`,
//     genre: generateGenre(GENRES)
//   },
//   {
//     title: generateGenre(FILMS),
//     image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
//     preview: `https://cdn.videvo.net/videvo_files/video/free/2019-07/small_watermarked/190625_04_CityMisc_HD_05_preview.webm`,
//     genre: generateGenre(GENRES)
//   },
//   {
//     title: generateGenre(FILMS),
//     image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
//     preview: `https://cdn.videvo.net/videvo_files/video/free/2019-07/small_watermarked/190625_04_CityMisc_HD_05_preview.webm`,
//     genre: generateGenre(GENRES)
//   },
//   {
//     title: generateGenre(FILMS),
//     image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
//     preview: `https://cdn.videvo.net/videvo_files/video/free/2019-07/small_watermarked/190625_04_CityMisc_HD_05_preview.webm`,
//     genre: generateGenre(GENRES)
//   },
//   {
//     title: generateGenre(FILMS),
//     image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
//     preview: `https://cdn.videvo.net/videvo_files/video/free/2019-07/small_watermarked/190625_04_CityMisc_HD_05_preview.webm`,
//     genre: generateGenre(GENRES)
//   },
//   {
//     title: generateGenre(FILMS),
//     image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
//     preview: `https://cdn.videvo.net/videvo_files/video/free/2019-07/small_watermarked/190625_04_CityMisc_HD_05_preview.webm`,
//     genre: generateGenre(GENRES)
//   },
//   {
//     title: generateGenre(FILMS),
//     image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
//     preview: `https://cdn.videvo.net/videvo_files/video/free/2019-07/small_watermarked/190625_04_CityMisc_HD_05_preview.webm`,
//     genre: generateGenre(GENRES)
//   },
//   {
//     title: generateGenre(FILMS),
//     image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
//     preview: `https://cdn.videvo.net/videvo_files/video/free/2019-07/small_watermarked/190625_04_CityMisc_HD_05_preview.webm`,
//     genre: generateGenre(GENRES)
//   }
// ];
