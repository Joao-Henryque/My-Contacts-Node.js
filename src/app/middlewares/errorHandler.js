module.exports = (error, request, response, next) => {
  console.log('handle Error', error);
  response.sendStatus(500);
};
