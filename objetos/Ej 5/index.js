class Printer{
	constructor(myAttribute1,myAttribute2){
    this.myAttribute1 = myAttribute1; //string
    this.myAttribute2 = myAttribute2; //número entero
    }
  	printerTest(){
      console.log(this.myAttribute1 + this.myAttribute2);
    }
}

let myPrinter = new Printer("holaa"," soy didi");
myPrinter.printerTest();