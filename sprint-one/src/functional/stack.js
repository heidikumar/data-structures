var Stack = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var highest = 0;
  var temp;

  // Implement the methods below
  someInstance.push = function (value) {
    storage[highest] = value;
    highest++;
  };

  someInstance.pop = function () {
    if(highest > 0) {
      highest--;
      temp = storage[highest];
      delete storage[highest];
      return temp;
    }
  };

  someInstance.size = function () {
    return highest;
  };

  return someInstance;
};
