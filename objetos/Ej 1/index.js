let d = new Date(); 
let dia = d.getDate();
let month = '0'+ parseInt(d.getMonth()+1);
let año = d.getFullYear();

console.log(month + '/' + dia + '/' + año);