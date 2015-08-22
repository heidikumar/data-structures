var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

/*
  // your code here
  newTree.children = null;  // fix me
*/

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children[this.children.length] = Tree(value);
};

treeMethods.contains = function(target, node, wasFound){

  node = node || this;
  wasFound = wasFound || false;

  if (target === node.value) {
    wasFound = true;
  }
  if (wasFound === false) {
    for (var i=0; i<node.children.length; i++){
      wasFound = this.contains(target, node.children[i], wasFound);
    }
  }
  return wasFound;
};


/*
 * Complexity: What is the time complexity of the above functions?
 * Constant time for addChild
 * Linear time for contains
*/
