class Counter {
    constructor() {
      this.myAttribute1 = null; //nro
    }
    constructor1() {
        this.myAttribute1=1
        console.log(this.myAttribute1);
    }
    increaseOne() {
        this.myAttribute1=this.myAttribute1+1
        if (this.myAttribute1 == 2) {
            return
        }
        console.log(this.myAttribute1);

    }
    decreaseOne() {
        this.myAttribute1=this.myAttribute1-1
        if (this.myAttribute1 == 2) {
            return
        }
        console.log(this.myAttribute1);
    }
    getValue() {
        console.log(this.myAttribute1);
    }
  }
  
let counter = new Counter();
counter.constructor1()
counter.increaseOne()
counter.increaseOne()
counter.decreaseOne()
counter.decreaseOne()