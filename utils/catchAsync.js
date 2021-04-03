// In order to get rid of try catch statements and keep code clean, we use the catchAsync function that takes in (fn) which is the async function - a promise that needs catch to catch error.
// This function will return a new anon function which will be assigned to the actual function.
// If there is an error, it will be caught in the catch statement and will be handled in global handling middleware
module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => next(err));
  };
};
