const { listen } = require("express/lib/application");

const isEmpty = Symbol('isEmpty');
const head = Symbol('head');

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Linked{
    constructor(){
        this[head] = null;
    }
    
    [isEmpty](){
        return this[head] === null;
    }

    push(data){
        const node = new Node(data);
        
        if(this[isEmpty]()            ){
            this[head]= node;
        }else{
            let current = this[head];
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
    }
    unshift(elemnet){
        const node = new Node(elemnet);
        node.next = this[head];
        this[head] = node;
    }
    shift(){
        if(this[isEmpty]()){
            console.log("Head is Empty")
            return null;
        }
        const remove = this[head].data;
        this[head] = this[head].next;
        return remove;
    }

    pop(){

        if(this[isEmpty]()){
            console.log("Head is Empty,Cannot use pop() Function")
            return;
        }
       
        let current = this[head];
        let prev = null;

        while(current.next){
            prev = current;
            current = current.next;
        }
        if(prev){
            prev.next = current.next;
        }else{
            this.head = current.next;
        }
    }

    count(){
        let count = 0;
        let current = this[head];

        while(current){
            count++;
            current = current.next;
        }
        return count;
    }

    search(element){
        let current = this[head];

        while(current){
            if(current.data === element){
                return true;
            }
            current = current.next;
        }
        return false;
    }

    insert(index,value){
        if(index === 0){
            this.unshift(value)
            return;
        }
        let current = this[head];
        let count = 0;
        if(this.count() < index){
            console.log("insert() function Error: Index out of Range");
            return;
        }
        while(count < index-1 && current){
            count++;
            current = current.next;
        }
        if(current){
            const node = new Node(value);
            node.next = current.next;
            current.next = node;
        }
    }

    delete(element){
        if(this[head].data === element){
          return this.shift();
        }
        let current =this[head];

        while(current.next && current.next.data !== element){
            current = current.next;
        }
        if(current.next){
            current.next = current.next.next;
        }
    }

    remove(index){
        if(index === 0){
            this.shift();
            return;
        }
        if(this.count() <= index){
            console.log("remove() function Error: Index out of Range");
            return;
        }
        let current = this[head];
        let count = 0;
        while(count < index-1 && current.next){
            count++;
            current = current.next;
        }
        if(current.next){
            current.next = current.next.next
        }

    }
 
    removeDuplicate(){
        let current = this[head];
        while(current){
            let runner = current;
            while(runner.next){
                if(runner.next.data === current.data){
                    runner.next = runner.next.next;
                }else{
                    runner = runner.next;
                }
            }
            current = current.next;
        }
    }

    removeDuplicateWithSet(){
        let set = new Set();
        let current =this[head];
        let prev = null;

        while(current){
            if(set.has(current.data)){
                prev.next = current.next
            }else{
                set.add(current.data)
                prev = current;
            }
            current = current.next;
        }
    }

    sort(){
        let current = this[head];
        while(current){
            let next = current
            while(next){
                if(current.data > next.data){
                    const temp = current.data;
                    current.data = next.data
                    next.data = temp;
                }
                next = next.next;
            }
            current = current.next;
        }
    }

    display(){
        let output = "";
        let current = this[head];
        while(current){
            output += current.data + " ";
            current = current.next;
        }
        console.log("LinkedList:",output);
    }
}

const linked = new Linked()

for(i=5; i>=1; i--){
    linked.push(i); // add elemenets
}

linked.pop() // remove last element

linked.shift() // remove first element

linked.display() // Linked list: 5 4 3 2 1
