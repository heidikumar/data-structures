var Queue = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var highest = 0;
  var temp;

  // Implement the methods below

  someInstance.enqueue = function (value) {
    highest++;
    for(var key in storage) {
      storage[Number(key) + 1] = storage[key];
    }
    storage[0] = value;
  };

  someInstance.dequeue = function () {
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
