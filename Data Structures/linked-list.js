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
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  
  _newNode(value){
    return {
      value: value,
      next: null
    }
  }
  
  append(value){
    const prevTail = this.tail;
    this.tail = this._newNode(value);
    prevTail.next = this.tail;
    this.length++;
  }

  prepend(value){
    const prevHead = this.head
    this.head = this._newNode(value);
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
    this.length++;  
    return this.printList();
  }
  //insert(2,99)

  remove(index){
    const leader = this.traverse(index - 1);
    let nodeToBeDeleted = leader.next;
    let postDeleteNode = nodeToBeDeleted.next;
    leader.next = postDeleteNode;
    this.length--;
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
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array)
  }

  reverse(){
    if(!this.head.next){
      return this.head;
    }
    let cur = this.head;
    let prev = null;
    while(cur){
      let nextUp = cur.next;
      cur.next = prev;
      prev = cur;
      cur = nextUp;
    }
    this.head = prev;
  }
  
}

let myLinkedList = new LinkedList(10);
myLinkedList.prepend(2);
myLinkedList.prepend(69);
myLinkedList.insert(2, 99);
myLinkedList.reverse();
myLinkedList.printList();
