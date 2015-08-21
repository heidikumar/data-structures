var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
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
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var result = null;
  for(var j=0; j<bucket.length; j++) {
    if (bucket[j][0]===k) {
      result =  bucket[j][1];
    }
  }
  return result;
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
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
