/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function (filePath) {
  // TODO
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, 'utf8', (err, file) => { // What is utf8?
      if (err) {
        reject(err);
      } else {
        resolve(file.split('\n')[0]);
      }
    });
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function (url) {
  // TODO
  return new Promise(function(resolve, reject) {
    request.get(url, (err, response, body) => {
      if (err) {
        reject(err);
      } else {
        resolve(response.statusCode);
      }
    });
  });
};

// This function violates rule (2) of the node style callback pattern,
// therefore we have to reimplement it using the `new Promise` constructor



// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
