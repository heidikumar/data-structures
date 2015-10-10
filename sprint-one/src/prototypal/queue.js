var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.highest = 0;
  return someInstance;
};

var queueMethods = {
  enqueue : function (value) {
    for(var key in this.storage) {
      this.storage[Number(key) + 1] = this.storage[key];
    };
    this.storage[0] = value;
    this.highest++;
  },
  dequeue : function () {
    if (this.highest > 0) {
      this.highest--;
      var temp = this.storage[this.highest];
      delete this.storage[this.highest];
      return temp;
    }
  },
  size : function () {
    return this.highest;
  }
};


