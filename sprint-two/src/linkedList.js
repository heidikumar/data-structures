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
      list.tail = newNode;
    }
  };

  list.removeHead = function(){
    var temp = list.head.value;
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

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

