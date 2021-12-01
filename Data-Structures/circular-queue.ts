/* tslint:disable */
// @ts-nocheck

class CircularQueue {
    constructor(size) {
  
        this.queue = [];
        this.read = 0;  // head or front
        this.write = 0; // tail or rear
        this.max = size - 1;

        while (size > 0) {
        this.queue.push(null);
        size--;
        }
    }
  
    print() {
        return this.queue;
    }
  
    enqueue(item) {
        if(this.queue[this.write] === null){
            this.queue[this.write] = item;
            this.write++
            if(this.write > this.max) this.write = 0;
            return item
        }
        return null
    }
  
    dequeue() {
       if(this.queue[this.read] != null){
           let temp = this.queue[this.read];
           this.queue[this.read] = null;
           this.read++
           if(this.read > this.max) this.read = 0;
           return temp
       }
       return null
    }
  }

  const MQ = new CircularQueue(5);
 console.log(MQ.print())
  MQ.enqueue(1)
 console.log(MQ.print())
  MQ.enqueue(2)
 console.log(MQ.print())
  MQ.enqueue(3)
 console.log(MQ.print())
  MQ.enqueue(4)
 console.log(MQ.print())
  MQ.enqueue(5)
 console.log(MQ.print())
  MQ.enqueue(6)
console.log(MQ.print())
MQ.enqueue(7)
console.log(MQ.print())

MQ.dequeue()
console.log(MQ.print())
MQ.dequeue()
console.log(MQ.print())
MQ.dequeue()
console.log(MQ.print())
MQ.dequeue()
console.log(MQ.print())
MQ.dequeue()
console.log(MQ.print())
MQ.dequeue()
console.log(MQ.print())
MQ.dequeue()
console.log(MQ.print())
MQ.dequeue()
console.log(MQ.print())


MQ.enqueue(6)
console.log(MQ.print())
MQ.enqueue(7)
console.log(MQ.print())

MQ.dequeue()
console.log(MQ.print())
MQ.dequeue()
console.log(MQ.print())


MQ.enqueue(1)
console.log(MQ.print())
 MQ.enqueue(2)
console.log(MQ.print())


