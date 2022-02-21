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
    ).innerHTML += `  <div class="cartita border rounded m-3" style=" width: ${newWidth}px">
    <div class='d-flex justify-content-start cartita p-1'>
            <p style="height: ${newHeight/3}px">${nro}</p>
            </div>
            <div class="d-flex justify-content-around cartita p-1" >
            <p  style="height: ${newHeight/3}px; ">${palo}</p>
            </div>
            <div class="d-flex justify-content-end cartita">
            <p >${nro}</p>  
            </div>
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
  ).innerHTML += `  <div class="cartita border rounded m-3 " style=" width: ${newWidth}px">
          <div class='d-flex justify-content-start cartita p-1'>
            <p style="height: ${newHeight/3}px">${newNro}</p>
            </div>
            <div class="d-flex justify-content-around cartita p-1" >
            <p  style="height: ${newHeight/3}px; ">${newPalo}</p>
            </div>
            <div class="d-flex justify-content-end cartita">
            <p >${newNro}</p>  
            </div>
      </div>`;
}

let timeout = setInterval(function () {
  mostrarCarta();
}, 10000);
