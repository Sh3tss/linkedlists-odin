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
    size(){
       let count = 0;
       let currentNode = this.head;
       
       while(currentNode){
            count++;
            currentNode = currentNode.newNode;
       }
       return count;
    }
    head(){
        return this.head;

    }
    tail(){
        return this.tail;
    }
    at(index){
        if(index < 0 || index >= this.size()){
            console.error("Error: index out of bounds");
            return null;
        }

        let currentNode = this.head;
        let counter = 0;

        while(counter < index){
            currentNode = currentNode.nextNode;
            counter++;
        }
        return currentNode;

    }
    pop(){
        if(!this.head){
            return null;
        }
        if(!this.head.nextNode){
            this.head = null;
            this.tail = null;
            return;
        }

        let currentNode = this.head;
        while(currentNode.nextNode !== this.tail){
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = null;
        this.tail = currentNode;
        
    }
    contains(value){
        let currentNode = this.head;

        while(currentNode){
            if(currentNode.value === this.value){
                return true;

            } 
            currentNode = currentNode.nextNode;

        }
        return false;

    }
    find(value){
        let currentNode = this.head;
        let index = 0;

        while (currentNode){
            if(currentNode.value === value){
                
                return index;
            }
            currentNode = currentNode.nextNode;
            index++;
            
        }
        return null;
    }
    toString(){
        let result = "";
        let currentNode = this.head;

        while(currentNode){
            if(currentNode.nextNode === null){
                result += `(${currentNode.value}) -> null`;
            }else {
                result += `(${currentNode.value}) ->`;
            }
            

            currentNode = currentNode.nextNode;
        }
        return result;
    }
}
