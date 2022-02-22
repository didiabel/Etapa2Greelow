class Calculator {
    constructor(num1, num2){
        this.total = 0;
        this.num1 = num1;
        this.num2 = num2;
    }
    sum(num1,num2){
        this.total = num1 + num2
            console.log(this.total);
       
    }
    rest(num1,num2){
        this.total = num1 - num2
            console.log(this.total);
    }
    mult(num1,num2){
        this.total = num1 * num2
            console.log(this.total);
    }
    div(num1,num2){
        this.total = num1 / num2
            console.log(this.total);
    }
}
let cuenta = new Calculator(1,1)
cuenta.sum(1,2)
cuenta.rest(3,4)
cuenta.mult(5,5)
cuenta.div(30,6)