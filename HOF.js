//A function that takes another function as an argumwnt or returns another function is called a higher order function

function HOF(callback) {
  callback();
  return function () {
    console.log('Returned a function');
  };
}
