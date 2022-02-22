class Person {
  constructor(dia, mes, año) {
      this.date = dia
      this.month = mes
      this.year = año
      this.edad = null
  }
  calculateAge() {
   let añoActual = new Date().getFullYear();
   this.edad = añoActual - this.year   
   console.log(this.edad);
  }
  canDrinkAlcohol() {
      if (this.edad>=21) {
          console.log(true);
      }else{
          console.log(false);
      }
  }
}
let person = new Person(23, 10, 2003);
person.calculateAge();
person.canDrinkAlcohol()
