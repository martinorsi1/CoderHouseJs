class Zapas {
    constructor(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
};

const zapasMujer = [];
const zapasHombre = [];
const zapasNiños = [];

zapasMujer.push(new Zapas(1, "Nike Air Force 1 Shadow", 4000, 3));
zapasMujer.push(new Zapas(2, "Nike Air Jordan 1 Elevate Low", 3500, 2));
zapasMujer.push(new Zapas(3, "Nike Gamma Force", 3000, 3));
zapasMujer.push(new Zapas(4, "Nike Air Force 1 '07 Next Nature", 3800, 1));

zapasHombre.push(new Zapas(5, "Nike Air Force 1 '07", 4600, 3));
zapasHombre.push(new Zapas(6, "Nike SB Dunk Low", 3500, 2));
zapasHombre.push(new Zapas(7, "Nike Dunk Low Retro", 4000, 1));
zapasHombre.push(new Zapas(8, "Nike Air Force 1 Luxe", 5500., 5));

zapasNiños.push(new Zapas(9, "Nike Force 1 LE", 2000, 2));
zapasNiños.push(new Zapas(10, "Nike Dunk Low", 2500, 5));
zapasNiños.push(new Zapas(11, "Nike Air Force 1", 2800, 4));
zapasNiños.push(new Zapas(12, "Nike Air Force 1 Impact Next Nature", 3000, 1));

const carrito = [];




alert(`Te damos la bienvenida a ZapasAn!!!
El mejor lugar para comprar Zapatillas a tu estilo en Uruguay`);
let nombre = prompt("Por favor ingrese su Nombre");
alert(`Bienvenido ${nombre}!`);
alert(`Tenemos lo que buscas!! Nuestro extenso catalogo se divide en tres Secciones: Mujer  Hombre  Niños`);

let seccion = prompt("Por favor ingrese la sección deseada para ver el catalogo de productos").toUpperCase();

while (seccion != "MUJER" && seccion != "HOMBRE" && seccion != "NIÑOS") {
    alert("Por favor ingrese la sección correcta!");
    seccion = prompt(`Tenemos lo que buscas!! Nuestro extenso catalogo se divide en tres Secciones: Mujer  Hombre  Niños`).toUpperCase();
}

switch (seccion) {
    case "MUJER":
        alert(`Genial ${nombre}! Elegiste la sección para Mujeres`);

        while (true) {
            const agregarId = prompt("Ingrese el Numero del ID para agregar en el carrito:" + "\n" + "\n" + zapasMujer.map(item => `Id: ${item.id} Nombre: ${item.nombre} Precio: $${item.precio} UYU Stock: ${item.stock}`).join("\n") + " \n" + "\n" + "Para ir al Carrito y finalizar la compra escriba ESC").toUpperCase();
            if (agregarId === "ESC") {
                const total = carrito.reduce((acum, productoAgregado) => acum + productoAgregado.precio, 0);
                alert("CARRITO DE COMPRAS:" + "\n" + "\n" + carrito.map(item => `Nombre: ${item.nombre} Precio: ${item.precio}`).join("\n") + " \n" + "\n" + `TOTAL: $${total} UYU`);
                break;
            };
            const productoAgregado = zapasMujer.find((item) => item.id === Number(agregarId));

            if (productoAgregado) {
                if (productoAgregado.stock > 0) {
                    carrito.push(productoAgregado);
                    productoAgregado.stock--;
                    alert(`Las ${productoAgregado.nombre} han sido agregadas al carrito!`);
                } else {
                    alert("Te pedimos disculpas, no contamos con Stock disponible para este producto.")
                }
            } else {
                alert("Producto no encontrado. Por favor ingrese el Numero correcto de ID!");
            };
        };
        break;

    case "HOMBRE":
        alert(`Genial ${nombre} ! Elegiste la seección para Hombres`);

        while (true) {
            const agregarId = prompt("Ingrese el Numero del ID para agregar en el carrito:" + "\n" + "\n" + zapasHombre.map(item => `Id: ${item.id} Nombre: ${item.nombre} Precio: $${item.precio} UYU Stock: ${item.stock}`).join("\n") + " \n" + "\n" + "Para ir al Carrito y finalizar la compra escriba ESC").toUpperCase();
            if (agregarId === "ESC") {
                const total = carrito.reduce((acum, productoAgregado) => acum + productoAgregado.precio, 0);
                alert("CARRITO DE COMPRAS:" + "\n" + "\n" + carrito.map(item => `Nombre: ${item.nombre} Precio: ${item.precio}`).join("\n") + " \n" + "\n" + `TOTAL: $${total} UYU`);
                break;
            };
            const productoAgregado = zapasHombre.find((item) => item.id === Number(agregarId));

            if (productoAgregado) {
                if (productoAgregado.stock > 0) {
                    carrito.push(productoAgregado);
                    productoAgregado.stock--;
                    alert(`Las ${productoAgregado.nombre} han sido agregadas al carrito!`);
                } else {
                    alert("Te pedimos disculpas, no contamos con Stock disponible para este producto.")
                }
            } else {
                alert("Producto no encontrado. Por favor ingrese el Numero correcto de ID!");
            };
        };
        break;


    case "NIÑOS":
        alert(`Genial ${nombre}! Elegiste la sección para Niños`);

        while (true) {
            const agregarId = prompt("Ingrese el Numero del ID para agregar en el carrito:" + "\n" + "\n" + zapasNiños.map(item => `Id: ${item.id} Nombre: ${item.nombre} Precio: $${item.precio} UYU Stock: ${item.stock}`).join("\n") + " \n" + "\n" + "Para ir al Carrito y finalizar la compra escriba ESC").toUpperCase();
            if (agregarId === "ESC") {
                const total = carrito.reduce((acum, productoAgregado) => acum + productoAgregado.precio, 0);
                alert("CARRITO DE COMPRAS:" + "\n" + "\n" + carrito.map(item => `Nombre: ${item.nombre} Precio: ${item.precio}`).join("\n") + " \n" + "\n" + `TOTAL: $${total} UYU`);
                break;
            };
            const productoAgregado = zapasNiños.find((item) => item.id === Number(agregarId));

            if (productoAgregado) {
                if (productoAgregado.stock > 0) {
                    carrito.push(productoAgregado);
                    productoAgregado.stock--;
                    alert(`Las ${productoAgregado.nombre} han sido agregadas al carrito!`);
                } else {
                    alert("Te pedimos disculpas, no contamos con Stock disponible para este producto.")
                }
            } else {
                alert("Producto no encontrado. Por favor ingrese el Numero correcto de ID!");
            };
        };
        break;
}





const total = carrito.reduce((acum, productoAgregado) => acum + productoAgregado.precio, 0);
const aumenteo = (total, aumenteo) => precioAumento = total * aumenteo;
let aumenteo1 = 1.05;
let aumenteo2 = 1.10;
let aumenteo3 = 1.15;
let aumenteo4 = 1.20;

alert("A continuacion elija el Metodo de Pago para realizar la compra");
let metodoDePago = Number(prompt("Metodo de Pago:1-Transferencia Bancaria 2-Trarjeta de Credito"));

while (metodoDePago != 1 && metodoDePago != 2) {
    alert("Por favor Ingrese el Numero correcto de la opcion deseada");
    metodoDePago = Number(prompt("Metodo de Pago:1-Tranferencia Bancaria 2-Trarjeta de Credito"));
};

switch (metodoDePago) {
    case 1:
        alert(`Haz elegido la opcion Tranferencia bancaria. El precio final es de $${total} UYU`);
        break;

    case 2:
        alert("Haz elegido la opcion Tarjeta de Credito, lo cual genera un aumenteo del precio final de las Zapas!");

        let numeroCuotas = Number(prompt("Por favor elija la cantidad de cuotas a Pagar: 2  4  6  10"));

        while (numeroCuotas != 2 && numeroCuotas != 4 && numeroCuotas != 6 && numeroCuotas != 10) {
            alert("Por favor elija la cantidad correcta de cuotas");
            numeroCuotas = Number(prompt("Por favor elija la cantidad de cuotas a Pagar: 2  4  6  10"));
        }
        switch (numeroCuotas) {
            case 2:
                aumenteo(total, aumenteo1);
                alert(`Perfecto, el precio final es de $${precioAumento} UYU`);
                break;

            case 4:
                aumenteo(total, aumenteo2);
                alert(`Perfecto, el precio final es de $${precioAumento} UYU`);
                break;

            case 6:
                aumenteo(total, aumenteo3);
                alert(`Perfecto, el precio final es de $${precioAumento} UYU`);
                break;

            case 10:
                aumenteo(total, aumenteo4);
                alert(`Perfecto, el precio final es de $${precioAumento} UYU`);
                break;
        }
        break;
};
