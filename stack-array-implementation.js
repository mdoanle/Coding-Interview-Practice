class Stack {
  constructor(){
    this.array = [];
  }
  peek() {
    if(this.array.length === 0){
      return null;
    }
    return this.array[0];
  }
  push(value){
    this.array.push(value);
    return this;
  }
  pop(){
    this.array.pop();
    return this;
  }
  //isEmpty
}

const myStack = new Stack();
myStack.push('discord');
myStack.push('twitter');
console.log(myStack);
myStack.pop();
console.log(myStack);



//Discord
//Udemy
//google