import readAndCreateArray from '../utils/read-file';

const dataPath = readAndCreateArray('day-4/data.txt');

function calculatePoints(scratchcards: string[]): number {
  let totalPoints = 0;
  const allCards: { [key: string]: number } = {};

  for (const card of scratchcards) {
    const [cardInfo] = card.split(':');
    const [_, cardNumber] = cardInfo.split(/\s+/);
    allCards[cardNumber] = 1;
  }

  for (const card of scratchcards) {
    const [cardInfo, numbers] = card.split(':');
    const [_, cardNumber] = cardInfo.split(/\s+/);
    const [winningNumbers, yourNumbers] = numbers
      .split('|')
      .map(str => str.trim().replace(/ {2}/g, ' ').split(' ').map(Number));
    let points = 0;

    for (const number of yourNumbers) {
      if (winningNumbers.includes(number)) {
        points += 1;
      }
    }
    console.log('Card: ', cardNumber, points);
    if (points > 0) {
      for (let i = 1; i <= points; i++) {
        if (allCards[Number(cardNumber) + 1]) {
          allCards[Number(cardNumber) + i] =
            allCards[Number(cardNumber) + i] + 1 * allCards[Number(cardNumber)];
        }
      }
    }
    totalPoints = totalPoints + allCards[Number(cardNumber)];
  }
  return totalPoints;
}

export default calculatePoints(dataPath);
