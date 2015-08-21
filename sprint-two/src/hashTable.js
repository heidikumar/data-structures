var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //setting i and v in _storage
  var tuple = [k,v];
  this._storage.set(i,tuple);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tuple = this._storage.get(i);
  return tuple[1];
};

HashTable.prototype.remove = function(k){
  var bucketIndex = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(bucket, currentIndex, storage){
    if(currentIndex === bucketIndex) {
      for(var j = 0; j < bucket.length; j++) {
        if(bucket[j] === k) {
          debugger;
          //storage[bucketIndex].splice(j, 1);
          storage[bucket][j] = null;
        }
      }
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
