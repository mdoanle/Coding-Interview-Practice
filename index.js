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
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(2);
myLinkedList.prepend(69);
console.log(myLinkedList);
