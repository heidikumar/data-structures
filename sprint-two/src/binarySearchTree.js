var BinarySearchTree = function(value){
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value, node) {
  node = node || this;
  // debugger;
    if(node.value === value){

    } else if (node.value > value) {
      //go left
      if(node.left === null) {
        node.left = new BinarySearchTree(value);
        //break out of recursion
      } else {
        this.insert(value, node.left);
      }
    } else if (node.value < value) {
      //go right
      if(node.right === null) {
    // debugger;
        node.right = new BinarySearchTree(value);
        //break out of recursion;
      } else {
        this.insert(value, node.right);
      }
    }
};

BinarySearchTree.prototype.contains = function (value, node, wasFound) {

  wasFound = wasFound || false;
  node = node || this;
  if (node.value === value){
    return true;
  } else if (node.left !== null && node.left.value >= value){
    wasFound = this.contains(value, node.left, wasFound); 
  } else if (node.right !== null && node.right.value <= value) {
    wasFound = this.contains(value, node.right, wasFound);
  }
  return wasFound;
};

BinarySearchTree.prototype.depthFirstLog = function(callback, node) {
  //debugger;
  node = node || this;
  if(node.left === null && node.right === null) {
    callback(node.value);
  } else {
    if(node.right !== null) {
       this.depthFirstLog(callback, node.right);
       callback(node.value);
     } 
     if(node.left !== null){
       this.depthFirstLog(callback, node.left);
       callback(node.value);
     }
   }
};


/*BinarySearchTree.prototype.walkTree = function(start, value, callback) {
  //if start is equal to value, do something
  if(start.left === null && start.right === null) {
    callback(start);
  }

  if(start.value === value) {
    callback(start);

  //if value is less than start.value, go left
  } else if (value < start.value) {
    this.walkTree(start.left, value, callback);
  //if value is greater than start.value, go right
  } else if (value > start.value) {
    this.walkTree(start.right, value, callback);
  }
};*/

/*
 * Complexity: What is the time complexity of the above functions?

 */
