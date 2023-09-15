const fs = require("fs");

// HANDLE DIRECTORIES

// CREATE DIRECTORY IF IT DOES NOT EXIST

if (!fs.existsSync("./Images")) {
  fs.mkdir("./Images", (error) => {
    if (error) {
      throw error;
    }
    console.log("The new directory is created successfully");
  });
} else {
  console.log("The Directory already exists");
}

// REMOVE DIRECTORY IF IT DOES EXIST

if (fs.existsSync("./Images")) {
  fs.rmdir("./Images", (error) => {
    if (error) {
      throw error;
    }
    console.log("The new directory is deleted successfully");
  });
} else {
  console.log("The Directory does not exist");
}
