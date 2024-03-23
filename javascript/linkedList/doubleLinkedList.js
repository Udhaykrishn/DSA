class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
class Linked {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    if (!this.head) {
      console.log("List is Empty");
    }
  }

  append(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
    }
    this.tail = node;
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  search(data) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (current.data === data) {
        count++;
      }
      current = current.next;
    }
    if (count !== 0) {
      console.log(`${data} found ${count} times`);
    } else {
      console.log(`${data} not found`);
    }
  }

  unshift(data) {
    const node = new Node(data);
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  shift() {
    if (this.isEmpty()) {
      return;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
  }

  delete(data) {
    if (this.isEmpty()) {
      return;
    }
    if (this.head && this.head.data === data) {
      this.head = this.head.next;
      if (this.head) this.head.prev = null;
    } else if (this.tail && this.tail.data === data) {
      this.tail = this.tail.prev;
      if (this.tail) this.tail.next = null;
    } else {
      let current = this.head;
      while (current && current.data !== data) {
        current = current.next;
      }
      if (current) {
        if (current.prev) current.prev.next = current.next;
        if (current.next) current.next.prev = current.prev;
      }
    }
  }

  insert(index, value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      return;
    }
    if (index === 0) {
      this.unshift(value);
      return;
    }

    let current = this.head;
    let count = 1;

    while (current && count <= index) {
      count++;
      current = current.next;
    }

    if (current) {
      node.prev = current.prev;
      node.next = current;
      current.prev.next = node;
      current.prev = node;
    } else {
      console.log("Out of Range Index");
    }
  }

  insertAfter(index, value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      return;
    }
    if (index === 0) {
      node.next = this.head.next;
      node.prev = this.head;
      this.head.next.prev = node;
      this.head.next = node;
      return;
    }
    let current = this.head;
    let count = 1;
    while (current && count <= index) {
      count++;
      current = current.next;
    }
    if (current) {
      if (current === this.tail) {
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
      } else {
        node.next = current.next;
        node.prev = current;
        current.next = node;
        node.next.prev = node;
      }
    } else {
      console.log("Out of Range Index");
    }
  }

  remove(index) {
    if (this.isEmpty()) {
      return;
    }
    if (index === 0) {
      this.shift(index);
      return;
    }
    let current = this.head;
    let count = 1;

    while (current && count < index + 1) {
      count++;
      current = current.next;
    }
    if (current) {
      if (current.data === this.tail.data) {
        this.tail = current.prev;
        this.tail.next = null;
        return;
      }
      current.prev.next = current.next;
      current.next.prev = current.prev;
    } else {
      console.log("Index out of Range");
    }
  }

  push(data) {
    const node = new Node(data);
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }

  pop() {
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
  }

  sort() {
    if (this.isEmpty()) {
      return;
    }
    let current = this.head;
    while (current) {
      let next = current;
      while (next) {
        if (current.data > next.data) {
          let temp = current.data;
          current.data = next.data;
          next.data = temp;
        }
        next = next.next;
      }
      current = current.next;
    }
  }

  display(reverse = false) {
    if (this.isEmpty()) {
      return;
    }
    let current = reverse ? this.tail : this.head;
    let output = "";
    while (current) {
      output += current.data + " ";
      current = reverse ? current.prev : current.next;
    }
    console.log("Linked List:", output);
  }
}

const link = new Linked();

link.append(40);
link.append(30);
link.append(20);
link.append(10);
link.remove(3)
link.insert(2,24)
link.display(); //Lisked List: 40 30 24 20
link.display(true); //Lisked List: 20 24 30 40 (reverse)
