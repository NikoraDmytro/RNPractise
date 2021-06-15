const MAX_COMIC_NUMBER = 2473;

export default function getRandomComicNumber() {
  return Math.floor(Math.random() * MAX_COMIC_NUMBER) + 1;
}
