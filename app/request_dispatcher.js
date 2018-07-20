'use strict';
const getPerson = function (event, callback) {

  console.log("Get Person");

  let personId =  (event.pathParameters || {}).id || false;

  if (!personId) {
    callback("Missing parameters", null);
    return;
  }

  let result = {
    personId: personId,
    name: "MiguelTest"
  };

  callback(null, {
    body: JSON.stringify(result),
    headers: {
      "content-type": "application/json"
    }
  });
};

module.exports = {
  getPerson: getPerson
};