class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(element) {
    const nodeElement = new Node(element);
    if (!this.head) {
      this.head = nodeElement;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = nodeElement;
  }

  prepend(element) {
    const nodeElement = new Node(element);
    nodeElement.next = this.head;
    this.head = nodeElement;
  }

  delete(element) {
    if (this.head.data === element) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next && current.next.data !== element) {
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next;
    }
  }

  insert(index, data) {
    if (index === 0) {
      this.prepend(data);
      return;
    }

    let count = 0;
    let current = this.head;
    while (count < index - 1 && current) {
      count++;
      current = current.next;
    }
    if (current) {
      const nodeElement = new Node(data);
      nodeElement.next = current.next;
      current.next = nodeElement;
    }
  }
  display() {
    let result = "LinkedList: ";
    let current = this.head;
    while (current) {
      result += current.data + " ";
      current = current.next;
    }
    console.log(result);
  }
}

const link = new LinkedList();

link.append(10);
link.append(20);
link.append(30);

link.insert(2, 100);

link.display();
