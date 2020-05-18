//Mensaje de Consola//
console.log("Hola Mundo :)");

//Alert como ventana Modal//
//alert("Hola Usuarios");

//Este mensaje se imprime dentro del html//
document.write("Hola Mundo :P ")

//Declaracion de variable
let nombre = "Lucas";

document.write("Hola " + nombre);

//seguimos con la declaracion de variable let - var - cons
//var es cajita comun valida en todo el documento (es una forma de escribir vieja).
//let reemplaza a var, pero hay una diferencia 
var edad = 32;
let age = 22;

document.write("<br> Variables var y let");
document.write("<br>Edad= " +edad);
document.write("<br>Age= " +age);

//cambiar el valor a una variable
edad = 45;
age = 11;

document.write("<br> Modificamos los valores de edad y age");
document.write("<br>Edad= " +edad);
document.write("<br>Age= " +age);

const url = "https://google.com";
document.write("<br>URL= " +url);

//error
//url = "va a saltar error xd";
//document.write("<br> error?"+url);

//operador unitario (contador unitario)
let contador = 1;
document.write("<br> contador= "+contador)
contador++;
document.write("<br> contador= "+contador)