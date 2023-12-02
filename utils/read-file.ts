import fs from 'fs';

function readAndCreateArray(filePath: string): string[] {
  // Read the content of the file synchronously
  const fileContent: string = fs.readFileSync(filePath, 'utf-8');

  // Split the content into an array of lines
  const lines: string[] = fileContent.split('\n');

  // Remove any empty lines
  const nonEmptyLines: string[] = lines.filter(line => line.trim() !== '');

  return nonEmptyLines;
}

export default readAndCreateArray;
