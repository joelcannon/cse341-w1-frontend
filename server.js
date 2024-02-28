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
const bitmap = fs.readFileSync("joel_portrait.jpg");

// Convert the binary data to a base64 string
const base64Image = Buffer.from(bitmap).toString("base64");
/* global Buffer */

// Define the JSON object to be returned
const data = {
  professionalName: "Joel Cannon",
  base64Image: base64Image,
  nameLink: {
    firstName: "Joel",
    url: "http://example.com",
  },
  primaryDescription: "This is a primary description.",
  workDescription1: "This is work description 1.",
  workDescription2: "This is work description 2.",
  linkTitleText: "Link Title",
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
