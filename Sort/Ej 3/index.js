let carta = document.querySelector(".carta");
let height = document.getElementById("inputHeight");
let width = document.getElementById("inputWidth");
let errorr = document.querySelector(".error");

let newHeight = 150;

height.addEventListener("change", function (e) {
  if (height.value > 400 || height.value < 150) {
    errorr.classList.remove("d-none");
    errorr.classList.add("d-flex");
  } else {
    newHeight = height.value;
    errorr.classList.add("d-none");
  }
});

let newWidth = 150;
width.addEventListener("change", function (e) {
  if (width.value > 400 || width.value < 150) {
    errorr.classList.remove("d-none");
    errorr.classList.add("d-flex");
  } else {
    newWidth = width.value;
    errorr.classList.add("d-none");
  }
});

window.onload = function () {
  function primerCarta() {
    const palos = ["♦", "♥", "♠", "♣"];
    let palo = palos[Math.floor(Math.random() * palos.length)];
    let nro = Math.floor(Math.random() * 10) + 1;
    document.querySelector(
      ".carta"
    ).innerHTML += `  <div class="cartita border rounded m-3 p-3" style="height: ${newHeight}px; width: ${newWidth}px">
    <p class="card-title d-flex justify-content-start">${nro}</p>
     <p class="card-text d-flex justify-content-around align-self-center">${palo}</p>
     <p class="d-flex justify-content-end " >${nro}</p>  
</div>`;
  }
  primerCarta();
};

function mostrarCarta() {
  const palos = ["♦", "♥", "♠", "♣"];
  let newPalo = palos[Math.floor(Math.random() * palos.length)];
  let newNro = Math.floor(Math.random() * 10) + 1;
  document.querySelector(
    ".carta"
  ).innerHTML += `  <div class="cartita border rounded m-3 p-3" style="height: ${newHeight}px; width: ${newWidth}px">
          <p class="card-title d-flex justify-content-start">${newNro}</p>
           <p class="card-text d-flex justify-content-around align-self-center">${newPalo}</p>
           <p class="d-flex justify-content-end" >${newNro}</p>  
      </div>`;
}
let timeout = setInterval(function () {
  mostrarCarta();
}, 10000);
