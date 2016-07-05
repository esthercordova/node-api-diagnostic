// Write a function to sum the numbers in a file.
//
// This function should take the name of a plain text file with one number per
// line, as in data/integers.txt.
// It should add all the numbers and pass the result as the second argument to
// the callback provided. e.g `callback(null, sum);`.
//
// Blank lines should be ignored.
// However, if there is a line with non-numeric content (e.g. "oops"),
// an Error should be passed as the first argument to the callback provided,
// e.g. `callback(new Error('line not a number'));`
//

'use strict';

const fs = require('fs');

let filename = process.argv[1];

const sumLines = (filename, callback(errorMessage, sum) ) => {

fs.readFile(filename, {encoding: 'utf8'}), (error, content) => {
  if (error) {
    console.error(error);
  }

  let lines = content.split('\n');
  lines.pop();

  lines.forEach((line) => {
    let sum = 0;
    if (line != line.isInteger) {
      console.log("line is not a number")
    } else {
    sum+= line;
    console.log(sum);
  }
  });
};
};

module.exports = {
  sumLines,
};
