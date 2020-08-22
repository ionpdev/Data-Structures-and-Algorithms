class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.array = [];
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  push(value) {
    const newNode = new Node(value);
    this.array.push(value);
    return this;
  }

  pop() {
    this.array.pop();
  }
}

const myStack = new Stack();
myStack.push('google');
// myStack.push('udemy');
// myStack.push('discord');
console.log(myStack);
// console.log(myStack.peek());
// myStack.pop();
// myStack.pop();
// myStack.pop();
// console.log(myStack);
