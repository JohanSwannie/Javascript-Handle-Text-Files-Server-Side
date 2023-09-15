const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

// READ TEXT FILES

fs.readFile("./Files/file1.txt", (error, data) => {
  if (error) {
    throw error;
  }
  console.log(data.toString());
});

// OR

fs.readFile("./Files/file2.txt", "utf8", (error, data) => {
  if (error) {
    throw error;
  }
  console.log(data);
});

// OR

fs.readFile(
  path.join(__dirname, "Files", "file3.txt"),
  "utf8",
  (error, data) => {
    if (error) {
      throw error;
    }
    console.log(data);
  }
);

// WRITE TEXT FILES - APPEND TEXT FILES - RENAME TEXT FILES - DELETE TEXT FILES

const newData =
  "The new data for this file is top secret. Therefocategory1Filere no questions please. We will follow up on new data whenever we get some. Goodbye for now my friends.";

const appendData = "\n\nAppend the tent with a new invent.";

fs.writeFile(
  path.join(__dirname, "Files", "cat1File.txt"),
  newData,
  (error) => {
    if (error) {
      throw error;
    }
    console.log("New file written successfully");
    fs.appendFile(
      path.join(__dirname, "Files", "cat1File.txt"),
      appendData,
      (error) => {
        if (error) {
          throw error;
        }
        console.log("Appending the file successfully");
        fs.rename(
          path.join(__dirname, "Files", "cat1File.txt"),
          path.join(__dirname, "Files", "category1File.txt"),
          (error) => {
            if (error) {
              throw error;
            }
            console.log("File renamed successfully");
            fs.unlink(path.join(__dirname, "Files", "file5.txt"), (error) => {
              if (error) {
                throw error;
              }
              console.log("File successfully deleted");
            });
          }
        );
      }
    );
  }
);

// FILE OPERARTIONS WITH PROMISES - ASYNC

const fileOperations = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "Files", "file4.txt"),
      "utf8"
    );
    console.log(data);
    await fsPromises.writeFile(
      path.join(__dirname, "Files", "cat2File.txt"),
      data
    );
    await fsPromises.appendFile(
      path.join(__dirname, "Files", "cat2File.txt"),
      "\n\nAppending number one."
    );
    await fsPromises.rename(
      path.join(__dirname, "Files", "cat2File.txt"),
      path.join(__dirname, "Files", "category2File.txt")
    );
    const newestData = await fsPromises.readFile(
      path.join(__dirname, "Files", "category2File.txt"),
      "utf8"
    );
    console.log(newestData);
  } catch (error) {
    console.error(error);
  }
};

fileOperations();

// exit on oncaught errors

process.on("uncaughtException", (error) => {
  console.error(error);
  process.exit(1);
});
