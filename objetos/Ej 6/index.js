class Printer {
  constructor(myAttribute1, myAttribute2, variable_model) {
    this.myAttribute1 = myAttribute1; //string
    this.myAttribute2 = myAttribute2; //número entero
    this.variable_model= variable_model
  }
  printerTest() {
    console.log(this.myAttribute1 + this.myAttribute2);
  }
  getModel() {
      console.log("The model of the printer is:" + this.variable_model);
  }
}

let myPrinter = new Printer("holaa"," soy didi", " TX-200");

myPrinter.getModel()