var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.highest = 0;
};

Stack.prototype.push = function (value) {
  this.storage[this.highest] = value;
  this.highest++;
};

Stack.prototype.pop = function () {
  if(this.highest > 0){
    this.highest--;
    var temp = this.storage[this.highest];
    delete this.storage[this.highest];
    return temp;
  }
};

Stack.prototype.size = function () {
  return this.highest;
};



