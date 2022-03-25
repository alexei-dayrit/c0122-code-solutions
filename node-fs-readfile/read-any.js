// Enable interaction with the file system
const fs = require('fs');

// Assigning user input into a variable
const filename = process.argv[2];

// asynchronously reading the contents of the file
// and encoding it using the utf8 character set
fs.readFile(filename, 'utf8', (err, text) => {
  // Check if there was an error while reading the file
  if (err) {
    // if there is an error
    console.error(err); // write the error to the process's stderr (standard error)
    process.exit(1); // forcibly quit with a failure code (not 0)
  }
  console.log(text); // otherwise print the file content to stdout (standard out)
});
