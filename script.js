class Node {
    constructor(value, nextNode){
       this.value = value;
       this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }
    append(value) {
        const newNode = new Node(value);

        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
    }
    prepend(value){
        const newNode = new Node(value);

        newNode.nextNode = this.head;
        this.head = newNode;

        if(this.tail === null){
            this.tail = newNode;
        }
    }
    
}
