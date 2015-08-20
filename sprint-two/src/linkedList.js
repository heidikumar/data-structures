var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if(list.head ===null && list.tail ===null){
      list[value] = Node(value);
      list.tail = list[value];
      list.head = list[value];
    } else {
      list[value] = Node(value);
      list.tail.next = value;
      list.tail = list[value];
    }
  };

  list.removeHead = function(){
    var temp = list.head.value;
    list.head = list[list.head.next];
    return temp;
  };

  list.contains = function(target, testValue){
    //find a node that has that key of target
    //start at head
    testValue = testValue || list.head;
    if (testValue.value === target || testValue.next === target){
      return true;
    } 
    if (testValue.next === null) {
      return false;
    } 
      return list.contains(target, list[testValue.next]);
    //if value = target return true
    //if next === null, return false
    //if not target, recurse call passing in nextValue object


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

