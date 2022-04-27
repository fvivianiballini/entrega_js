
function precioFinal() {
precioTotal = elegirSandwich + bebida;
}


let elegirSandwich  = prompt("¡Bienvenid@ a nuestro menu virtual! ¿Que queres comer hoy? Ingresá el numero de la opción elegida \n 1 - Hamburguesa con queso $400 \n 2 - Hamburguesa doble con queso $550 \n 3 - Sandwich de milanesa completo $500 \n 4 - Hamburguesa vegetariana $450");
    if(elegirSandwich != "esc" ){
        switch (elegirSandwich) {
        case ("1") : 
        elegirSandwich = 400;
        alert("elegiste opcion 1 : Hamburguesa con queso ")
        break
        case ("2") :
        elegirSandwich = 550;
        alert("elegiste opcion 2 : Hamburguesa doble con queso ")
        break
        case ("3") :
        elegirSandwich = 500;
        alert("elegiste opcion 3 : Sandwich de milanesa completo")
        break
        case ("4") :
        elegirSandwich = 450;
        alert("elegiste opcion 4 : Hamburguesa vegetariana")
        break
        default :
        alert("no ingresaste una opcion valida")
        }
    }
    let bebida = prompt ("¡Ya casi estamos! Tenemos bebidas para ofrecerte, queres agregar alguna a tu pedido? Ingresa el numero de la opcion elegida \n 1 - Gaseosa 600cc $200 \n 2 - Agua $ 180 \n 3 - Cerveza $200 \n 0 - Sin bebida");
    if(bebida != "esc"){
        switch (bebida) {
            case ("1") : 
            bebida = 200;
            alert("elegiste opcion 1 : Gaseosa 600c")
            precioFinal()
            alert("el pedido fue tomado, el precio total es : $" + precioTotal,)
            break
            case ("2") :
            bebida = 180;
            alert("elegiste opcion 2 : Agua")
            precioFinal()
            alert("el pedido fue tomado, el precio total es : $" + precioTotal,)
            break
            case ("3") :
            bebida = 200;
            alert("elegiste opcion 3 : Cerveza")
            precioFinal()
            alert("el pedido fue tomado, el precio total es : $" + precioTotal,)
            break  
            case ("0") :
                bebida = 0;
            alert("No elegiste bebida")
            precioFinal()
            alert("el pedido fue tomado, el precio total es : $" + precioTotal,)
            break
            default :
            alert("no ingresaste una opcion valida")
    }
    }

