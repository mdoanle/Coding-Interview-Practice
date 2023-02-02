class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value){
    const node = new Node(value);
    if(this.length === 0){
      this.top = node;
      this.bottom = node;
    }
    let temp = this.top;
    this.top = node;
    this.top.next = temp;
    this.length++;
  }
  pop(){
    let toDelete = this.top;
    this.top = toDelete.next;
    this.length--;
  }
  //isEmpty
}

const myStack = new Stack();
myStack.push('twitter');
myStack.push('youtube');
myStack.push('google');
myStack.pop();
console.log(myStack.peek())
//console.log(myStack);




//Discord
//Udemy
//google