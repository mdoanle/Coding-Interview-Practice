class Stack {
  constructor(){
    this.array = [];
  }
  peek() {
    if(this.array.length === 0){
      return null;
    }
    return this.array[this.array.length - 1];
  }
  push(value){
    this.array.push(value);
    return this;
  }
  pop(){
    this.array.pop();
    return this;
  }
}

const myStack = new Stack();
myStack.push('discord');
myStack.push('twitter');
console.log(myStack.peek());
console.log(myStack);

//myStack.pop();
//console.log(myStack);



//Discord
//Udemy
//google
