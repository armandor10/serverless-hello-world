'use strict';

module.exports.hello = async event => {
  console.log(event);
  let message = event.queryStringParameters && event.queryStringParameters.name?
                      'Hello ' + event.queryStringParameters.name:
                      "Hello world!";
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: message,
        input: event,
      },
      null,
      2
    ),
  };
};
