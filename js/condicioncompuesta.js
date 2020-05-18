let numero = parseInt(prompt("Ingrese un numero"));

//anidar if...

if(numero >= 5){
    if(numero <= 5){
        document.write("El numero esta entre 5 y 15.");
    }else{
        document.write("El numero ingresado es mayor a 15.");
    }
}

//otra forma con condicion compuesta...

if(numero >= 5 && numero <= 15){
    document.write("El nuero esta entre 5 y 15.");
}else{
    document.write("El numero ingesado no esta entre 5 y 15.");
}
