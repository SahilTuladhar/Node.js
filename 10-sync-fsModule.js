// synchronous : Blocking

const { readFileSync, writeFileSync } = require("node:fs");


console.log("Starting file operation");
// Reading from the file
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log("Runs only after file operation"); // rus after file operation

// writing to a new file

writeFileSync(
  "./content/results.txt",
  `Here is the resut: ${first} , ${second}`,
  { flag: "a" } // setting writefilesync to append mode
);

console.log("only executes after the reading and writing");

