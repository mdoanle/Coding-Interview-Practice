class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    if(this.length === 0) {
      return null;
    }
    return this.first;
  }
  enqueue(value){
    const node = new Node(value);
    if(this.first === null && this.last === null) {
      this.first = node;
      this.last = node;
    }
    this.last.next = node;
    this.last = node;
    this.length++;
    return this;
  }
  dequeue(){
    if(!this.first){
      return null;
    }
    if(this.first === this.last){
      return null;
    }
    let toBeDeleted = this.first;
    this.first = toBeDeleted.next;
    this.length--; 
  }
  //isEmpty;
}

const myQueue = new Queue();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.enqueue('Samir');
myQueue.dequeue();
console.log(myQueue);

//Joy
//Matt
//Pavel
//Samir