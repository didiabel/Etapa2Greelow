let palabra = 'DABALEARROZALAZORRAELABAD'
esSimetrico =(palabra)=>{
    if (palabra) {
        let comparacion1 = ''
        let comparacion2 = ''
        for (let i = 0; i < palabra.length; i++) {
            comparacion1 = comparacion1.concat(palabra[i].slice(0,1))
        }
        for (let a = (palabra.length-1); a >=0; a--) {
             comparacion2 = comparacion2.concat(palabra[a].slice(0,1))
        }
        if (comparacion1 === comparacion2) {
            return true
        }else{
            return false
        }
    }
}

console.log(esSimetrico(palabra));