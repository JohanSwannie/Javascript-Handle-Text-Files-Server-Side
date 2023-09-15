const fs = require("fs");

// CREATE READ AND WRITE STREAMS FOR FILE HANDLING

// EXAMPLE 1 - READ FILE AND WRITE NEW FILE

const rs = fs.createReadStream("./Files/file6.txt", { encoding: "utf8" });
const ws = fs.createWriteStream("./Files/category3File.txt");

rs.on("data", (retrievedData) => {
  ws.write(retrievedData);
});

// EXAMPLE 2 - READ FILE AND WRITE NEW FILE

const rs2 = fs.createReadStream("./Files/file7.txt", { encoding: "utf8" });
const ws2 = fs.createWriteStream("./Files/category4File.txt");

rs2.pipe(ws2);

// exit on oncaught errors

process.on("uncaughtException", (error) => {
  console.error(error);
  process.exit(1);
});
