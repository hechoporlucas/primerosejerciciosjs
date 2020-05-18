let numero1 = prompt("Ingrese un numero");
console.log(numero1);

let numero2 = prompt("Ingrese un segundo numero");
console.log(numero2);

if( parseInt(numero1) > parseInt(numero2))
{
    document.write("El numero 1 es mayor al numero 2")
}
else if(parseInt(numero1) == parseInt(numero2))
{
    document.write("Los numeros son iguales")
}
else
{
    document.write("El numero 1 no es mayor al numero 2")
}