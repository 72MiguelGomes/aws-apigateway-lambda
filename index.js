const requestDispatcher = require("./app/request_dispatcher");

'use strict';

exports.handler = (event, context, callback) => {

  switch(event.resource){

    case "/person/{id}":
      requestDispatcher.getPerson(event, callback);
      break;

    default:
      // Send HTTP 501: Not Implemented
      console.log("Error: unsupported PATH (" + event.resource + ")");
      callback(null, { statusCode: 501 })
  }
};