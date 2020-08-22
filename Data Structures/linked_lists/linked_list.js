// 1 --> 10 --> 5 --> 16

// let myLinkedList = {
//   head: {
//     value: 10,
//     // reference pointer
//     next: {
//         value: 5,
//         // reference pointer
//         next: {
//             value: 16,
//             next: null
//         }
//     },
//   },
// };

// we could use the Node class to not repeat
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    // create the new node and pointer
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    newNode.prev = this.tail;
    // attaching the new/next node after the last node, and point to the new node
    this.tail.next = newNode;
    // the new last item that will point to the last created node
    this.tail = newNode;
    //add the lenght  to equal to null
    this.length++;
    // return the link list
    return this;
  }
  prepend(value) {
    const preNode = {
      value: value,
      next: null,
      prev: null,
    };
    // point to the fisrt item -> head
    preNode.next = this.head;
    this.head.prev = preNode;
    this.head = preNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    // check params
    if (index >= this.length) {
      return this.append(value);
    }
    //
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    // conect to the first node
    const leader = this.traverseToIndex(index - 1);
    //
    const follower = leader.next;
    //
    leader.next = newNode;
    //
    newNode.prev = leader;
    // point the newNode to the next node
    newNode.next = follower;
    //
    follower.prev = newNode;
    // update
    this.length++;
    // print
    return this.printList();
  }

  traverseToIndex(index) {
    //check for params
    let counter = 0;
    let currentNode = this.head;
    //
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    //check params
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      //update tthe currentNode
      currentNode = currentNode.next;
    }
    return array;
  }

  reverse() {
    //
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    // looping after we got the first  and second element
    while (second) {
      // if it has a value and is not null and that node exists
      const temp = second.next; // we create a temp value
      second.next = first; // now second element will point to the first element
      first = second; // now first element now becomes the second element
      second = temp; // and the second item becomes the third and next elements
    }
    this.head.next = null;
    this.head = first; // the head elemnt becomes the tail element
    return this.printList();
  }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(1, 99);
myLinkedList.insert(20, 88);
myLinkedList.remove(2);
console.log(myLinkedList.printList());
console.log(myLinkedList.reverse());
