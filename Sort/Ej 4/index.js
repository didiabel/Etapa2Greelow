let nro = 0;
document.querySelector(".input").addEventListener("change", function () {
  let input = document.querySelector(".input").value;
  nro = input;
});

let draw = document.querySelector(".draw");
let sort = document.querySelector(".sort");

let arrayDeCartas = [];
let arrayParaSort = []

draw.addEventListener("click", function () {
  mostrarCarta(nro, arrayDeCartas);
});

function mostrarCarta(number, arrayDeCartas) {
  arrayDeCartas = []
  for (let i = 0; i < number; i++) {
    const palos = ["♦", "♥", "♠", "♣"];
    let newPalo = palos[Math.floor(Math.random() * palos.length)];
    let newNro = Math.floor(Math.random() * 10) + 1;
    const object = {
      newNro: newNro,
      newPalo: newPalo
    };
    arrayDeCartas.push(object);
    arrayParaSort = arrayDeCartas
  }

  document.querySelector(".carta").innerHTML =
    arrayDeCartas.map((cadaUno)=>`  <div class="cartita border rounded m-2" style=" width: 100px">
      <div class='m-1'>
      <div class='d-flex justify-content-start cartita'>
      <p>${cadaUno.newNro}</p>
      </div>
      <div class="d-flex justify-content-around cartita" >
      <p>${cadaUno.newPalo}</p>
      </div>
      <div class="d-flex justify-content-end cartita">
      <p >${cadaUno.newNro}</p>  
      </div>
      </div>
      </div> `);
}

sort.addEventListener("click", function () {
  bubbleSort(arrayParaSort);
});

  const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
      for (let a = 0; a < array.length - 1; a++) {
        if (arrayParaSort[a].newNro > arrayParaSort[a + 1].newNro) {
          let pos = arrayParaSort[a];
          arrayParaSort[a] = arrayParaSort[a + 1];
          arrayParaSort[a + 1] = pos;
        }
      }
    }
    document.querySelector(".cartaSort").innerHTML =
    arrayParaSort.map((cadaUno)=>`  <div class="cartita border rounded m-2" style=" width: 100px">
      <div class='m-1'>
      <div class='d-flex justify-content-start cartita'>
      <p>${cadaUno.newNro}</p>
      </div>
      <div class="d-flex justify-content-around cartita" >
      <p>${cadaUno.newPalo}</p>
      </div>
      <div class="d-flex justify-content-end cartita">
      <p >${cadaUno.newNro}</p>  
      </div>
      </div>
      </div>`);
  };
