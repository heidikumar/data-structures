var HashTable = function () {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function (k, v) {
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket;
  if (this._storage.get(i)===undefined){
    this._storage.set(i, []);
  }
  bucket = this._storage.get(i);
  //go through bucket
  var existsIndex = -1;
  for (var j=0; j<bucket.length; j++){
    if (bucket[j][0]===k){
        existsIndex = j;
    }
  };
  if (existsIndex >= 0){
    bucket[existsIndex][1] = v;
  } else {
    bucket.push([k,v]);
  }

  this._storage.set(i,bucket);
  this._size++;
  if (Math.floor(this._limit * 0.75) <= this._size){
    this.resize(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function (k) {
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var result = null;
  for(var j=0; j<bucket.length; j++) {
    if (bucket[j][0]===k) {
      result =  bucket[j][1];
    }
  };
  return result;
};

HashTable.prototype.remove = function (k) {
  var i = getIndexBelowMaxForKey(k, this._limit);
  // debugger;
  var bucket =this._storage.get(i);
  for (var j=0; j<bucket.length; j++){
    if (bucket[j][0]===k){
      bucket.splice(j,1);
    }
  };
  this._storage.set(i, bucket);                       //GETTING A BUG IN THE SETTER WHERE "typeof i" is not a number, and therefore bucket gets set to undefined
  this._size--;
  if (Math.floor(this._limit * 0.25) <= this._size){
    this.resize(Math.floor(this._limit/2));
  }
};


HashTable.prototype.resize = function (newLimit) {
  //create a temp array;
  var tempArray = [];
  this._limit = newLimit;
  //pick out each tuple and put it in the array by:
    //for loop through this._storage to pick out the buckets
  for (var i=0; i<this._storage.length; i++){
      //save that bucket in a temp var bucket
      var bucket = this._storage[i];
      //loop through the tuples in the bucket
      for(var j=0; j<bucket; j++){
      //push tuple into the array
        tempArray.push(bucket[j]);
      }
  //now we have an array of all the tuples
  };
  //this._storage = the new LimitedArray
  this._storage = LimitedArray(this._limit);
  //loop through temp array
  for (var x=0; x<tempArray.length; x++){
  //insert(array[i][0], array[i][1]);
    this.insert(array[x][0], array[x][1]);
  };
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Insert, remove, retrieve: even though they uses a linear time operation,
 * they is constant time because bucket size is tiny compared to storage size.
 * If we added a resort, that would be linear time.
 */
