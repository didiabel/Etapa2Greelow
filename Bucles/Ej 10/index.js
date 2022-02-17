var arr = [45, 67, 87, 23, 5, 32, 60];

var arrNuevo = [];
let posicion = arr.length;

for (let i = 0; i < arr.length; i++) {
  const element = arr[posicion - 1];
  arrNuevo.push(element);
  posicion--;
}
console.log(arrNuevo);
