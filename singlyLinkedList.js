class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // ADD ELEMENT IN THE END
  push(val) {
    let newNode = new Node(val);
    newNode.next = null;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      //   console.log(this.head);
      //   console.log(this.head.next);
    } else {
      this.tail.next = newNode; // make last node go to new node
      this.tail = newNode; // update last node is list to new node
    }
    this.length++;
    return this;
  }
  traverse() {
    let current = this.head;
    while (current) {
      current = current.next;
      return current;
    }
  }
  // REMOVE LAST ELEMNT
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      this.tail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }
  // REMOVE FIRST ELEMENT
  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return current;
  }
  // ADD FIRST ELEMENT
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let oldHead = this.head;
      this.head = newNode;
      this.head.next = oldHead;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index >= this.length || index < 0 || this.length === 0) return null;
    let counter = 0;
    let current = this.head;
    while (counter != index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(val, index) {
    let nodeFound = get(index);
    if (nodeFound) {
      nodeFound.value = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    let newNode = new Node(val);
    if (index == this.length) {
      this.push(val);
      return true;
    } else if (index == 0) {
      this.unshift(val);
      return true;
    }
    // Insert in the middle
    let oldNode = this.get(index - 1);
    let currentNode = oldNode.next;
    oldNode.next = newNode;
    newNode.next = currentNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index == this.length - 1) this.pop();
    if (index == 0) this.shift();
    let prevNode = this.get(index - 1);
    let removed = prevNode.next;
    prevNode.next = removed.next;

    this.length--;
    return removed;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  print(){
    var arr = [];
    var current = this.head
    while(current){
        arr.push(current.val)
        current = current.next
    }
    console.log(arr);
}
}
let singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push('5');
