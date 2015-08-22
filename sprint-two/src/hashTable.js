var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v){
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
  }
  if (existsIndex >= 0){
    bucket[existsIndex][1] = v;
  } else {
    bucket.push([k,v]);
  }

  //setting i and v in _storage
  this._storage.set(i,bucket);
  this._size++;
  if (this._size/this._limit > 0.75){
    this.resize(this._limit*2);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];
  for (var index = 0; index < bucket.length; index ++){
    var tuple = bucket[index];
    if (tuple[0] === k){
      return tuple[1];
    }
  } 
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket =this._storage.get(i);
  for (var j=0; j<bucket.length; j++){
    if (bucket[j][0]===k){
      bucket.splice(j,1);
    }
  }
  this._storage.set(i, bucket);
  this._size--;
  if (this._size / this._limit <= 0.25){
    this.resize(this._limit/2);
  }
};

  // debugger;
HashTable.prototype.resize = function(newLimit){
  console.log(this._size);
  var oldStorage = this._storage;
  var oldLimit = this._limit;
  this._limit = newLimit;
  this._storage = LimitedArray(newLimit);
  this.redistribute(oldStorage, newLimit, oldLimit);
};

HashTable.prototype.redistribute = function(oldStorage, newLimit, oldLimit){

  for (var j = 0; j<oldLimit; j++){
  // declare a bucket

  var bucket = oldStorage.get(j) || [];
    //new for loop in bucket
    for (var bucketIndex = 0; bucketIndex < bucket.length; bucketIndex++){
      var tuple = bucket[bucketIndex];
      //for each key in each tuple, generate a new Hash from Hash function
      this.insert(tuple[0], tuple[1]);
      //insert that tuple in the new table, at new Hash bucketIndex
    }
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 * Insert, remove, retrieve: even though they uses a linear time operation, 
 * they is constant time because bucket size is tiny compared to storage size.
 * If we added a resort, that would be linear time.
 */
