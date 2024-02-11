class Queue {
  constructor() {
    this.items = [];
    this.front = 0;
    this.rear = -1;
  }
  isEmpty() {
    return this.front > this.rear;
  }
  enqueue(element) {
    this.rear++;
    this.items[this.rear] = element;
  }
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is Empty");
      return null;
    }
    const removeElement = this.items[this.front];
    this.front++;

    if (this.front > this.rear) {
      this.front = 0;
      this.rear = -1;
    }
    return removeElement;
  }
  getFront() {
    if (this.isEmpty()) {
      console.log("Queue is Empty");
      return null;
    }
    return this.items[this.rear];
  }

  delete(element) {
    let found = false;
    let deleteIndex = -1;

    for (let i = this.front; i <= this.rear; i++) {
      if (this.items[i] === element) {
        found = true;
        deleteIndex = i;
        break;
      }
    }
    if (found) {
      for (let i = deleteIndex; i < this.rear; i++) {
        this.items[i] = this.items[i + 1];
      }
      this.rear--;

      if (this.front > this.rear) {
        this.front = 0;
        this.rear = -1;
      }
      return true;
    }
    return false;
  }
  display() {
    let result = "Queue: ";
    for (let i = this.front; i <= this.rear; i++) {
      result += this.items[i] + " ";
    }
    console.log(result);
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.delete(20);
queue.dequeue();

queue.display();
