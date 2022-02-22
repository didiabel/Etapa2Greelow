let nro = prompt("Pone un nro y mira la consola")

if (nro && nro > 0) {
  let nros = nro
  for (let i = 0; i < nro; i++) { 
    nros = nro-i
    console.log(nros);
  }
}