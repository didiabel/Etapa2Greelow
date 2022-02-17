var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

imprimir = () =>{
    for (let i = 0; i < mix.length; i++) {
        const element = mix[i];
        console.log(element);
    }
}
imprimir()