import readAndCreateArray from '../utils/read-file';

const dataPath = readAndCreateArray('day-1/data.txt');

function sumCalibrationValues(calibrationDocument: string[]): number {
  let totalSum = 0;

  for (const line of calibrationDocument) {
    let firstCharacter = '';
    let lastCharacter = '';
    for (const char of line) {
      // Check if the character is a digit
      if ('0' <= char && char <= '9') {
        if (firstCharacter === '') {
          // If firstCharacter is empty, add the digit to it
          firstCharacter = char;
        } else {
          // If firstCharacter is not empty, add the digit to lastCharacter
          lastCharacter = char;
        }
      }
    }
    if (lastCharacter === '') {
      // If lastCharacter is missing, it means first and last characters are the same
      lastCharacter = firstCharacter;
    }
    if (firstCharacter !== '' && lastCharacter !== '') {
      // Combine the first and last characters to form a two-digit number
      const calibrationValue = parseInt(firstCharacter + lastCharacter, 10);
      // Add the calibration value to the total sum
      totalSum += calibrationValue;
    }
  }
  return totalSum;
}

export default sumCalibrationValues(dataPath);
