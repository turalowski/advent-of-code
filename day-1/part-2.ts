// Import the readAndCreateArray function from the specified path
import readAndCreateArray from '../utils/read-file';

// Define an object where keys and values are both strings
const numbers: { [key: string]: string } = {
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '7',
  '8': '8',
  '9': '9',
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
};

// Read and create an array from the data in the specified file path
const dataPath = readAndCreateArray('day-1/data.txt');

// Define a regular expression to match valid numbers and their text representations
const regex =
  /^(1|2|3|4|5|6|7|8|9|one|two|three|four|five|six|seven|eight|nine)/;

// Function to calculate the sum of calibration values from an array of strings
function sumCalibrationValues(calibrationDocument: string[]): number {
  let totalSum = 0;

  // Iterate through each line in the calibration document
  for (const line of calibrationDocument) {
    let firstNumber;
    let lastNumber;

    // Iterate through each character in the line
    for (let i = 0; i < line.length; i++) {
      // Use the regex to find matches in the substring starting from the current position
      const matches = line.substring(i).match(regex);

      // If there is a match
      if (matches !== null) {
        // Extract the matched number or text representation
        const number: string = matches[0];

        // If firstNumber is not set, set it to the corresponding value from the 'numbers' object
        if (!firstNumber) {
          firstNumber = numbers[number];
        }

        // Set lastNumber to the corresponding value from the 'numbers' object
        lastNumber = numbers[number];
      }
    }

    // If both firstNumber and lastNumber are set
    if (firstNumber && lastNumber) {
      // Combine the first and last characters to form a two-digit number
      const calibrationValue = parseInt(firstNumber + lastNumber, 10);
      // Add the calibration value to the total sum
      totalSum += calibrationValue;
    }
  }

  // Return the total sum of calibration values
  return totalSum;
}

// Export the result of sumCalibrationValues when applied to the dataPath array
export default sumCalibrationValues(dataPath);
