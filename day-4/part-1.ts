import readAndCreateArray from '../utils/read-file';

const dataPath = readAndCreateArray('day-4/data.txt');

function calculatePoints(scratchcards: string[]): number {
  let totalPoints = 0;

  for (const card of scratchcards) {
    const [winningNumbers, yourNumbers] = card
      .split(':')[1]
      .split('|')
      .map(str => str.trim().replace(/ {2}/g, ' ').split(' ').map(Number));
    console.log('yourNumbers', yourNumbers);
    let points = 0;

    for (const number of yourNumbers) {
      if (winningNumbers.includes(number)) {
        points = points === 0 ? 1 : points * 2;
      }
    }
    totalPoints += points;
  }
  return totalPoints;
}

export default calculatePoints(dataPath);
