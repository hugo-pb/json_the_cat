const request = require("request");
const search = process.argv[2];
const breedLink = `https://api.thecatapi.com/v1/breeds/search?q=${search}`;
request(breedLink, (error, response, body) => {
  if (error) {
    console.log("error:", error);
  }
  const data = JSON.parse(body);
  console.log(data[0].description);
});
