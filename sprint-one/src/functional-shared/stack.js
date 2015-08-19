var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  _.extend(someInstance, stackMethods);
  someInstance.storage = {};
  someInstance.highest = 0;
  return someInstance;
};



var stackMethods = {
  push : function(value){
    //count up highest
    this.highest++;
    //add value as a property of storage at key highest
    this.storage[this.highest] = value;
  },

  pop : function(){
    if (this.highest>0){
      this.highest--;
      var temp = this.storage[this.highest];
      delete this.storage[this.highest];
      return temp;
    }

  },

  size : function(){
    return this.highest;
  }
};


