let numero1 = prompt("Ingrese un numero");
console.log(numero1);

let numero2 = prompt("Ingrese un segundo numero");
console.log(numero2);

let numero3 = prompt("Ingrese un tercer numero");
console.log(numero3);

if ( parseInt(numero1) > parseInt (numero2) && parseInt(numero1) > parseInt(numero3)){
    document.write ("El numero1 es el mayor de los 3.")
}

else if (parseInt(numero2) > parseInt (numero1) && parseInt(numero2) > parseInt(numero3)){
    document.write ("El numero2 es el mayor de los 3.")
}

else if (parseInt(numero3) > parseInt(numero1) && parseInt(numero3) > parseInt(numero2)){
    document.write ("El numero3 es el mayor de los 3.")
}

else{
    document.write ("Algunos de los numeros son iguales.")
}