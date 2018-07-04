
//Create a Node class that consists of two properties, element, which stores the node’s data, and next, which stores a link to the next node in the linked list.
var node = new Node("hello");

function Node(element){
    this.element = element;
    this.next = null;
}
console.log(node);


//Ans: Node { element: 'hello', next: null }