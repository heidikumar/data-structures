

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this[node] = {
    edges : {}
  };
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(target){
  if(this[target]) {
    return true;
  }
  return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  //remove edges
  for (var key in node.edges){
    delete this[key].edges[node];
  }
  delete this[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  if (this[fromNode].edges[toNode] === toNode){
      return true;
  }
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  this[fromNode].edges[toNode] = toNode;
  this[toNode].edges[fromNode] = fromNode;
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this[fromNode].edges[toNode];
  delete this[toNode].edges[fromNode];
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  cb = cb || _.identity;                      //NOTE: Write spec so that if cb not passed, defaults to _.identity
  for (var key in this){
    if(typeof this[key] !== "function") {
      cb(key);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Contains runs at constant time
 * removeNode runs in linear time
 * hasEdge runs in constant time
 * addEdge and removeEdge run in constant time
 * forEachNode runs in linear time
 */



