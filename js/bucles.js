document.write("1-");
document.write("<br> 2-");
document.write("<br> 3-");
document.write("<br> 4-");
document.write("<br> 5-");

//bucles while
//estructura

//while(condicion logica){
//    codigo...;
//    condicion=false;
//}

let i = 0;

while(i <= 35){
    document.write("<br> Linea -" + i);
    i++;
}

//bucle do-while
//estructura

//do{
//    codigo...;
//}while (condicion)

let x = 1;
do{
    document.write("<br>Numero: " + x)
    x++;
}while (x <= 25)

//bucle for (inicializacion; condicion logica; incrementador)

for (a = 30; a >= 0; a--){
    document.write("<br> Numeros creados con bucle for: " + a);
}