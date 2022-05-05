
function precioFinal() {
    precioTotal = elegirSandwich + bebida;
}

class Sandwiches {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.precio = precio;
    }

    getNombre() {
        return this.nombre;
    }

    getPrecio() {
        return this.precio;
    }

    getId() {
        return this.id;
    }

}

class Bebidas {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.precio = precio;
    }

    getNombre() {
        return this.nombre;
    }

    getPrecio() {
        return this.precio;
    }

    getId() {
        return this.id;
    }

}

const sandwiches = [];
sandwiches.push(new Sandwiches(1, "Hamburguesa con queso", 400));
sandwiches.push(new Sandwiches(2, "Hamburguesa doble con queso", 550));
sandwiches.push(new Sandwiches(3, "Sandwich de milanesa completo", 500));
sandwiches.push(new Sandwiches(4, "Hamburguesa vegetariana", 450));
const bebidas = [];
bebidas.push(new Bebidas(1, "Gaseosa 600c", 400));
bebidas.push(new Bebidas(2, "Agua", 550));
bebidas.push(new Bebidas(3, "Cerveza", 500));
bebidas.push(new Bebidas(4, "Sin bebida", 0));



let elegirSandwich  = prompt("¡Bienvenid@ a nuestro menu virtual! ¿Que queres comer hoy? Ingresá el numero de la opción elegida \n 1 - Hamburguesa con queso $400 \n 2 - Hamburguesa doble con queso $550 \n 3 - Sandwich de milanesa completo $500 \n 4 - Hamburguesa vegetariana $450");
    if(elegirSandwich != "esc" ){
        switch (elegirSandwich) {
        case ("1") : 
        elegirSandwich = 400;
        alert("elegiste opcion 1 : Hamburguesa con queso ")
        console.log(sandwiches[0])
        break
        case ("2") :
        elegirSandwich = 550;
        alert("elegiste opcion 2 : Hamburguesa doble con queso ")
        console.log(sandwiches[1])
        break
        case ("3") :
        elegirSandwich = 500;
        alert("elegiste opcion 3 : Sandwich de milanesa completo")
        console.log(sandwiches[2])
        break
        case ("4") :
        elegirSandwich = 450;
        alert("elegiste opcion 4 : Hamburguesa vegetariana")
        console.log(sandwiches[3])
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
            console.log(bebidas[0])
            break
            case ("2") :
            bebida = 180;
            alert("elegiste opcion 2 : Agua")
            precioFinal()
            alert("el pedido fue tomado, el precio total es : $" + precioTotal,)
            console.log(bebidas[1])
            break
            case ("3") :
            bebida = 200;
            alert("elegiste opcion 3 : Cerveza")
            precioFinal()
            alert("el pedido fue tomado, el precio total es : $" + precioTotal,)
            console.log(bebidas[2])
            break  
            case ("0") :
                bebida = 0;
            alert("No elegiste bebida")
            precioFinal()
            alert("el pedido fue tomado, el precio total es : $" + precioTotal,)
            console.log(bebidas[3])
            break
            default :
            alert("no ingresaste una opcion valida")
    }
    }


    
