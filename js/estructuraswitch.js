let dia = parseInt(prompt("Seleccione un numero 1=lunes; 2=martes; 3=miercoles 4=jueves; 5=viernes; 0=sabado,domingo"));

//switch(condicion logica){
//    case 1:
//        codigo a ejecutar si la condicion es == 1
//        break;
//    case 2:
//        codigo...;
//        break;
//    case 3:
//        codigo...;
//        break;
//    default:
//        codigo si no se cumple ninguno de los case...;
//}

switch(dia){
    case 1:
        document.write("El dia seleccionado es Lunes.");
        break;
    case 2:
        document.write("El dia seleccionado es Martes.");
        break;
    case 3:
        document.write("El dia seleccionado es Miercoles.");
        break;
    case 4:
        document.write("El dia seleccionado es Jueves.");
        break;
    case 5:
        document.write("El dia seleccionado es Viernes.");
        break;
    case 0:
        document.write("El dia seleccionado es Sabado o Domingo.");
        break;
    default:
        document.write("La opcion es incorrecta.");
}
