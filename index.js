// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  
  _newNode(value){
    return {
      value: value,
      next: null,
      prev: null
    }
  }
  
  append(value){
    const newNode = this._newNode(value);
    const prevTail = this.tail;
    this.tail = newNode;
    prevTail.next = this.tail;
    this.tail.prev = prevTail;
    this.length++;
  }

  prepend(value){
    const newNode = this._newNode(value);
    const prevHead = this.head
    this.head = newNode;
    prevHead.prev = this.head;
    this.head.next = prevHead;
    this.length++;
  }

  insert(index, value) {
    if(index === 0){
      this.prepend(value);
    } else if(index >= this.length) {
      return this.append(value);
    }
    const newNode = this._newNode(value);
    const leader = this.traverse(index - 1);
    const fatPointer = leader.next; //55
    leader.next = newNode;
    newNode.next = fatPointer;
    newNode.prev = leader;
    this.length++;  
    return this.printList();
  }
  //insert(2,99)

  remove(index){
    const leader = this.traverse(index - 1);
    let nodeToBeDeleted = leader.next;
    let postDeleteNode = nodeToBeDeleted.next;
    leader.next = postDeleteNode;
    postDeleteNode.prev = leader;
    this.length--;
    return this.printList();
  }

  traverse(index){
    let i = 0;
    let currentNode = this.head;
    while(i !== index){
      currentNode = currentNode.next;
      i++;
    }
    return currentNode;
  }

  printList(){
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null) {
      array.push(currentNode);
      currentNode = currentNode.next;
    }
    console.log(array)
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(12);
myLinkedList.append(14);
myLinkedList.prepend(8);
myLinkedList.insert(1, 17);
myLinkedList.insert(2,21);
myLinkedList.remove(1);
//myLinkedList.printList();
