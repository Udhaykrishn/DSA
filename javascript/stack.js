class Node{
    constructor(data){
        this.data = data
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
    }
    isEmpty(){
        return this.top === null
    }
    push(element){
        const nodeElement = new Node(element);
        nodeElement.next = this.top;
        this.top = nodeElement
    }
    
    pop(){
        if(this.isEmpty()){
            console.log("Stack is Empty")
            return null;
        }
        const removeElement = this.top.data;
        this.top = this.top.next;
        return removeElement
    }
    delete(element){
        let current = this.top;
        let prev = null;

        while(current && current.data !== element){
            prev = current;
            current = current.next;
        }
        if(current){
            if(prev){
                prev.next = current.next
            }else{
                this.top = current.next
            }
        }else{
            console.log(`${element} is not found`)
        }
    }
    peek(){
        if(this.isEmpty()){
            console.log("Stack is Empty")
            return null;
        }
        return this.top.data;
    }
    display(){
        let current = this.top;
        console.log("Stack: ")
        
        while(current){
            console.log(current.data)
            current = current.next;
        }
    }
}

const stack = new Stack();

stack.push(10)
stack.push(20)
stack.push(30)

stack.delete(20)
stack.peek()
stack.pop()
stack.display()