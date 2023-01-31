class CrazyQueue {
  constructor() {
    this.first = [];
    this.last = [];
  }

  push(x){
    let length = this.first.length;
    for(let i = 0; i < length; i++) {
       this.last.push(this.first.pop());
   }
    this.last.push(x);
  }

  pop(){
    let length = this.last.length;
    for(let i = 0; i < length; i++){
      this.first.push(this.last.pop());
    }
    return this.first.pop();
  }

  peek(){
    if(this.first.length === 0){
      return this.last[0];
    }
    return this.first[this.first.length - 1];
  }
}

const myQueue = new CrazyQueue();
myQueue.push(1);
myQueue.push(2);
console.log(myQueue.pop());


// Input
// ["MyQueue", "push", "push", "peek", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 1, 1, false]

// Explanation
// MyQueue myQueue = new MyQueue();
// myQueue.push(1); // queue is: [1]
// myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
// myQueue.peek(); // return 1
// myQueue.pop(); // return 1, queue is [2]
// myQueue.empty(); // return false
