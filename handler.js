'use strict';
const databaseManager = require('./databaseManager');

function createResponse(statusCode, message) {
  return {
    statusCode: statusCode,
    body: JSON.stringify(message)
  };
}

module.exports.hello = (event, context, callback) => {
  const itemId = event.queryStringParameters.name;
  databaseManager.getItem(itemId).then(response => {
    console.log(response);
    callback(null, createResponse(200, response));
  });
};

module.exports.save = (event, context, callback) => {
  const item = JSON.parse(event.body);
  console.log(item);
  item.itemId = item.name;

  databaseManager.saveItem(item).then(response => {
    console.log(response);
    callback(null, createResponse(200, response));
  });
};
