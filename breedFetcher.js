const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  const breedLink = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(breedLink, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    if (!data[0]) {
      callback("Breed Not Found");
    } else {
      callback(null, data[0].description);
    }
  });
};
module.exports = { fetchBreedDescription };
