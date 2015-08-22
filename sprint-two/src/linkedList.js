var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);
    if (list.head === null){
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      newNode.before = list.tail;
      list.tail = newNode;
    }
  };

  list.removeHead = function(){
    var temp = list.head.value;
    if(list.head.next) {
      list.head.next.before = null;
    }
    list.head = list.head.next;
    return temp;
  };

  list.contains = function(target, testValue){
    testValue = testValue || list.head;
    //check that value of head is equal to target, if yes, return true
    if(testValue.value === target) {
      return true;
    //if not, check if value of next is === null
    } else if (testValue.next === null) {
      return false;
    } 
    //if neither, recursively call contains on next (object)
    return list.contains(target, testValue.next);
  };

  
  list.removeTail = function(){
    list.tail = list.tail.before;
    list.tail.next = null;
  };

  list.addToHead = function(value){
    var newNode = Node(value);
    if(list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      newNode.next = list.head;
      list.head.before = newNode;
      list.head = newNode;
    }
  };
  
  return list;

};


var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.before = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Constant time for insertion and deletion (addToTail && removeHead)
 * Linear time for contains (searching through list)
 */

