import readAndCreateArray from '../utils/read-file';
const data = readAndCreateArray('day-2/data.txt');

interface CubeCounts {
  red: number;
  green: number;
  blue: number;
  [key: string]: number; // Add index signature
}

function powerOfCubes(game: string[][]): number {
  const minCubes: { [key: string]: number } = {
    green: 0,
    blue: 0,
    red: 0,
  };
  for (const subset of game) {
    // '13 green'
    for (const cube of subset) {
      // ['13', 'green']
      const [countStr, color] = cube.split(' ');
      const count = parseInt(countStr, 10);
      if (count > minCubes[color]) {
        minCubes[color] = count;
      }
    }
  }
  return minCubes['green'] * minCubes['blue'] * minCubes['red'];
}

function possibleGames(inputData: string[]): number {
  let sumOfPowers = 0;

  // Game 1: 13 green, 3 red; 4 red, 9 green, 4 blue; 9 green, 10 red, 2 blue
  for (const line of inputData) {
    // ['Game 1','13 green, 3 red; 4 red, 9 green, 4 blue; 9 green, 10 red, 2 blue']
    const parts = line.split(': ');
    // ['13 green, 3 red','4 red, 9 green, 4 blue','9 green, 10 red, 2 blue']
    const subsets = parts[1].split('; ');
    // [
    //   ['13 green', '3 red'],
    //   ['4 red', '9 green', '4 blue'],
    //   ['9 green', '10 red', '2 blue'],
    // ];
    const game = subsets.map(subset => subset.split(', '));
    sumOfPowers += powerOfCubes(game);
  }
  return sumOfPowers;
}

export default possibleGames(data);
