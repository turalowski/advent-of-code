import readAndCreateArray from '../utils/read-file';
const data = readAndCreateArray('day-2/data.txt');

interface CubeCounts {
  red: number;
  green: number;
  blue: number;
  [key: string]: number; // Add index signature
}

function isPossible(game: string[][], cubeCounts: CubeCounts): boolean {
  //   ['13 green', '3 red'],
  for (const subset of game) {
    // '13 green'
    for (const cube of subset) {
      // ['13', 'green']
      const [countStr, color] = cube.split(' ');
      const count = parseInt(countStr, 10);
      if (count > cubeCounts[color]) {
        return false;
      }
    }
  }
  return true;
}

function possibleGames(inputData: string[], cubeCounts: CubeCounts): number {
  const possibleGameIds: number[] = [];
  let sumOfPossibleGameIds = 0;

  // Game 1: 13 green, 3 red; 4 red, 9 green, 4 blue; 9 green, 10 red, 2 blue
  for (const line of inputData) {
    // ['Game 1','13 green, 3 red; 4 red, 9 green, 4 blue; 9 green, 10 red, 2 blue']
    const parts = line.split(': ');
    // 1
    const gameId = parseInt(parts[0].split(' ')[1], 10);
    // ['13 green, 3 red','4 red, 9 green, 4 blue','9 green, 10 red, 2 blue']
    const subsets = parts[1].split('; ');
    // [
    //   ['13 green', '3 red'],
    //   ['4 red', '9 green', '4 blue'],
    //   ['9 green', '10 red', '2 blue'],
    // ];
    const game = subsets.map(subset => subset.split(', '));
    if (isPossible(game, cubeCounts)) {
      possibleGameIds.push(gameId);
      sumOfPossibleGameIds += gameId;
    }
  }
  return sumOfPossibleGameIds;
}
const cubeCounts: CubeCounts = { red: 12, green: 13, blue: 14 };

export default possibleGames(data, cubeCounts);
