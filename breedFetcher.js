const request = require("request");

const breedLink = `https://api.thecatapi.com/v1/breeds/search?q=sib`;
request(breedLink, (error, response, body) => {
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  console.log("body:", body); // Print the HTML for the Google homepage.
});
