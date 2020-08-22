class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // inserting values
  insert(value) {
    //create a new node
    const newNode = new Node(value);
    //check if the tree is empty and there is no new node
    if (this.root === null) {
      //make the root Node the newNode that we inserted
      this.root = newNode;
    } else {
      //if the root Node is already filled
      let currentNode = this.root;
      while (true) {
        //
        if (value < currentNode.value) {
          // left, if the value is less than the currentNode
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          //if there is somehting to the left, then
          currentNode = currentNode.left;
        } else {
          // right, if the value is equal or greater to currentNode
          if (!currentNode.right) {
            currentNode.right = newNode;
            // return this to stop looping, if we have a pointer to null
            return this;
          }
          //
          currentNode = currentNode.right;
        }
      }
    }
  }
  // search if a node exists
  lookup(value) {
    // check if there is a root node
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    // looping the tree
    while (currentNode) {
      //search left if the value is less than currentNode
      if (value < currentNode.value) {
        // left
        currentNode = currentNode.left;
        //search right
      } else if (value > currentNode.value) {
        // right
        currentNode = currentNode.right;
        // if there is a match
      } else if (currentNode.value === value) {
        // return the matching
        return currentNode;
      }
    }
    // if we dont find anything
    return false;
  }

  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
}

const tree = new BinarySearchTree();

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.remove(170);
console.log(tree.lookup(9));
console.log(JSON.stringify(traverse(tree.root)));

//        9
//    4       20
//  1   6  15    170

// recursion function
function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

// AVL Trees & Red Black Trees
