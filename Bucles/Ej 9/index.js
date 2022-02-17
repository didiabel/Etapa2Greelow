let par =
  "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus";
let counts = [];

for (let i = 0; i < par.length; i++) {
  let cant = 0;
  for (let a = 0; a < par.length; a++) {
    
    if (par[a].toLowerCase() === par[i].toLowerCase()) {
      cant++;
    }
  }
  counts.push({
    letra: par[i],
    veces: cant,
  });
}

console.log(counts);