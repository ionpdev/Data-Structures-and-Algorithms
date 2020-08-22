const strings = ['a', 'b', 'c', 'd'];
// methods to use with array

// push, append
strings.push('e'); // O(1)

console.log(strings);

// pop - remove the last item

strings.pop();
strings.pop(); // O(1)

console.log(strings);

// unshift

strings.unshift('x');

console.log(strings);

// splice

strings.splice(2, 0, 'alien');

console.log(strings);

// -------- *********************

// Static vs Dynamic Arrays

// ------- **********

// Implementing an Array

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index) {
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push('hi');
newArray.push('there');
newArray.push('!');
newArray.delete(0);
newArray.push('are');
newArray.push('nice');
newArray.delete(1);
console.log(newArray);
