// Import the express library
const express = require("express");
const cors = require("cors");
const fs = require("fs");
// const mongoose = require("mongoose");

// Create an instance of express
const app = express();

// Use cors
app.use(cors());

// mongoose.connect("mongodb://localhost/test", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// Read the file from the filesystem
const bitmap = fs.readFileSync("public/joel_portrait.jpg");

// Convert the binary data to a base64 string
const base64Image = Buffer.from(bitmap).toString("base64");

// Define the JSON object to be returned
const data = {
  professionalName: "Joel W. Cannon",
  base64Image: base64Image,
  nameLink: {
    firstName: "Joel",
    url: "http://example.com",
  },
  primaryDescription: " is a CSE student at BYU Idaho.",
  workDescription1: "He is studying to become a Web App developer.",
  workDescription2: "He will finish his 3rd certificate in Spring 2024.",
  linkTitleText: "More Info:",
  linkedInLink: {
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/joelwcannon/",
  },
  githubLink: {
    text: "GitHub",
    link: "https://github.com/joelcannon/",
  },
};

// Define the endpoint
app.get("/professional", (req, res) => {
  res.json(data);
});

// Start the server
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
