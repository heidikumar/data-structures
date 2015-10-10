var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.highest = 0;
};

Queue.prototype.enqueue = function (value) {
  for(var key in this.storage) {
    this.storage[Number(this.highest) + 1] = this.storage[this.highest];
  };
  this.storage[0] = value;
  this.highest++;
};

Queue.prototype.dequeue = function () {
  if(this.highest > 0) {
    this.highest--;
    var temp = this.storage[this.highest];
    delete this.storage[this.highest];
    return temp;
  }
};

Queue.prototype.size = function () {
  return this.highest;
}


