const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  const breedLink = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(breedLink, (error, response, body) => {
    const data = JSON.parse(body);
    callback(error, data[0].description);
  });
};
module.exports = { fetchBreedDescription };
