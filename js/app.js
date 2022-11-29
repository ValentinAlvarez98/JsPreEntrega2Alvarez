// Variables globales
// ==================-==================
const usuarios = [];
const nombresProductos = [];
const preciosProductos = [];
let opcionIngreso = 0;
let opcionProductos = 0;
let opcionContinuar = "";
let opcionMetodoPago = 0;
let opcionCuotas = 0;
let disponible = 0;
let disponibleTarjeta = 0;
let vuelto = 0;
let efectivo = 0;
let credito = 0;
let interes = 0;
// ==================-==================

// Creador de objetos (Usuarios)
// ==================-==================

function Usuario(usuario, password) {
    this.nombreUsuario = usuario;
    this.passwordUsuario = password;
}


// Creador de objetos (Productos)
// ==================-==================
function Producto(nombreProd, precioProd, categoriaProd, marcaProd, codigoProd) {

    this.nombreProd = nombreProd;
    this.precioProd = precioProd;
    this.categoriaProd = categoriaProd;
    this.marcaProd = marcaProd;
    this.codigoProd = codigoProd;

    this.productoSeleccionado = function () {

        alert(`Usted ha seleccionado el producto \n
         - ${this.nombreProd} \n
         Al precio de: USD ${this.precioProd} \n`);

        nombresProductos.push(this.nombreProd);
        preciosProductos.push(this.precioProd);

    }

}
// ==================-==================

// Productos creados
// ==================-==================
const producto1 = new Producto("ZOTAC GEFORCE RTX 2060", 619, "TARJETAS DE VIDEO", "NVIDIA", "BFXZON02");
const producto2 = new Producto("AMD PROCESADOR RYZEN 5 5600", 224, "PROCESADORES", "AMD", "BFX56");
const producto3 = new Producto("GIGABYTE PLACA B450M DS3H V2", 93, "MOTHERBOARD", "GIGABYTE", "BFXGB45D");
const producto4 = new Producto("NETAC MEMORIA SHADOW DDR4 16GB PC3200 RED", 60, "MEMORIA RAM", "NETAC", "BFXNS16R");
// ==================-==================

// Funcion de ingreso de usuario
// ==================-==================
function ingreso() {
do {

    opcionIngreso = Number(prompt(`Seleccione una opción: \n
    1) Ingresar \n
    2) Registrarse \n
    0) Salir \n
    `));
    
    switch (opcionIngreso) {

        case 1:

            let usuarioIngresado = prompt("Ingrese su usuario: ");
            let contraseniaIngresada = prompt("Ingrese su contraseña: ");

            if ((usuarios.find(usuario => usuario.nombreUsuario = usuarioIngresado.toLowerCase && usuario.passwordUsuario === contraseniaIngresada )) !== undefined) {

                alert("Bienvenido " + usuarioIngresado);
                carrito();

            } else {

                alert("Usuario o contraseña incorrectos");

            }

            break;
        
        case 2:

            let usuarioRegistro = prompt("Ingrese su usuario: ");

            if (usuarioRegistro.length < 4) {

                alert("El usuario debe tener al menos 4 caracteres");
                opcionIngreso = 2;

            } else {

                let contraseniaRegistro = prompt("Ingrese su contraseña: ");

                if (contraseniaRegistro.length < 8) {

                    alert("La contraseña debe tener al menos 8 caracteres");
                    opcionIngreso = 2;

                } else {

                    let confirmarContrasenia = prompt("Confirme su contraseña: ");

                    if (contraseniaRegistro !== confirmarContrasenia) {

                        alert("Las contraseñas no coinciden");

                    } else {

                        let compararUsuarios = usuarios.find(usuario => usuario.nombreUsuario === usuarioRegistro.toLowerCase);

                        if (usuarioRegistro != "" && contraseniaRegistro != "") {

                            if (compararUsuarios === undefined) {

                                const nuevoUsuario = new Usuario(usuarioRegistro, contraseniaRegistro);

                                usuarios.push(nuevoUsuario);

                                alert("¡Usuario registrado correctamente!");
                                console.log(usuarios);

                            } else {

                                alert("Usuario ya registrado");
                                console.log(usuarios);

                            }

                        } else {

                            alert("No puede ingresar un espacio vacio, intentelo de nuevo");

                        }
    
                        console.log("Su usuario es: " + usuarioRegistro + " y su contraseña es: " + contraseniaRegistro);

                    }
                    
                }
            }

            break;
        
        case 0:

            alert("¡Hasta luego!");

            break;
        
        default:

            alert("Opción incorrecta");

            break;

    }

    } while (opcionIngreso != 0);
}
// ==================-==================

// Funcion de carrito con todas las opciones correspondientes
// ==================-==================
function carrito() {

    let precioAPagar = 0;
    
    do {

    opcionProductos = Number(prompt(`Seleccione los productos deseados: \n
    1) Tarjeta de video:` + " " + `ZOTAC GEFORCE RTX 2060 \n 
    USD 619,00 \n
    2) Procesador:` + " " + `AMD RYZEN 5 5600 \n
    USD 224,00 \n
    3) Motherboard:` + " " + `GIGABYTE B450M DS3H V2 \n
    USD 93,00 \n
    4) Memoria RAM:` + " " + `NETAC SHADOW DDR4 16GB 3200 RED \n
    USD 60,00 \n
    0) Volver \n`));
        
        switch (opcionProductos) {

            case 1:
                
                producto1.productoSeleccionado();
                precioAPagar = producto1.precioProd;
                productosEnCarrito();
                continuar();

            break;
        
            case 2:
                
                producto2.productoSeleccionado();
                precioAPagar = producto2.precioProd;
                productosEnCarrito();
                continuar();

            break;
            
            case 3:
                
                producto3.productoSeleccionado();
                precioAPagar = producto3.precioProd;
                productosEnCarrito();
                continuar();

            break;
            
            case 4:
                
                producto4.productoSeleccionado();
                precioAPagar = producto4.precioProd;
                productosEnCarrito();
                continuar();

            break;
        
            case 0:
                
                alert("¡Volviendo al menú de inicio!");
                ingreso();
                
                break;
            
            default:

                alert("¡Opción inválida!");

                break;
            
        }
        
    } while (opcionProductos != 0);

    // Productos en el carrito
    // ==================-==================
    function productosEnCarrito() {

        let productosEnCarrito = [];

        for (let i = 0; i < nombresProductos.length; i++) {

            productosEnCarrito += nombresProductos[i] + " " + "USD" + " " + preciosProductos[i] + "\n";

        }

        console.log(productosEnCarrito);

    }
    // ==================-==================


    // Funcion para continuar
    // ==================-==================
    function continuar() {

        opcionContinuar = prompt(`¿Desea añadir otro producto al carrito? \n
        S/N\n`
        ); 
             
        if (opcionContinuar == "S" || opcionContinuar == "s") {
            carrito();
        } else if (opcionContinuar == "N" || opcionContinuar == "n") {
            pago(opcionMetodoPago);
        } else {
            alert("Opción incorrecta");
            continuar(); 
        }
 
    }
    // ==================-==================

    // Funcion para elegir el metodo de pago y realizar las operaciones correspondientes
    // ==================-==================
    function pago(opcionMetodoPago) {

        do {

        opcionMetodoPago = Number(prompt(`Seleccione el método de pago deseado: \n
        1) Efectivo \n 
        2) Crédito (5% Interés) \n
        0) Volver \n`));
        
            switch (opcionMetodoPago) {
            
                case 1:
                    
                    alert(`Usted a seleccionado: \n
                    Efectivo`);

                    efectivo = 1;
                    calculadoraPago();
                    opcionMetodoPago = 0;
                    
                break;
            
                case 2:
                    
                    alert(`Usted a seleccionado: \n
                    Crédito`);

                    credito = 1;
                    calculadoraPago();
                    opcionMetodoPago = 0;
                    
                break;
            
                case 0:
                    
                    alert("¡Volviendo al menú de productos!");
                
                    break;
                
                default:

                    alert("Opción incorrecta");
                    pago(opcionMetodoPago);
                    
                break;
                
        }
            
        } while (opcionMetodoPago != 0);


        // Función para calcular interés, cuotas y vuelto
        // ==================-==================
        function calculadoraPago() {


            let precioAPagar = 0;

            for (let i = 0; i < preciosProductos.length; i++) {
                precioAPagar += preciosProductos[i];
            }	

            nombresProductos = [];
            preciosProductos = [];


            console.log(precioAPagar);
            console.log(preciosProductos);
            
            interes = precioAPagar * (5 / 100);
            
            let precioMasInteres = precioAPagar + interes;

            const precioCuotas = [];
        
            if (efectivo == 1) {

                alert(`El precio total a pagar es de:\n
                USD ${precioAPagar}`);

                disponible = Number(prompt(`Ingrese su dinero disponible: `));

                if (disponible >= precioAPagar) {

                    alert("¡Compra realizada!");
                    vuelto = disponible - precioAPagar;
                    alert(`Le han sobrado: ${vuelto}`);
                    alert("¡Volviendo al menú de productos!");
                    carrito();

                } else {

                    alert("Fondos insuficientes");
                    carrito();

                }

            
            } else if (credito == 1) {

                alert(`El precio total a pagar es de:\n
                USD ${precioAPagar} + USD ${interes.toFixed(2)} = USD ${precioMasInteres.toFixed(2)}`);

                disponibleTarjeta = Number(prompt(`Ingrese su dinero disponible: `));

                if (disponibleTarjeta >= precioMasInteres) {

                    for (let i = 1; i <= 12; i++) {

                        let precioCuota = precioMasInteres / i;
                        precioCuotas.push(precioCuota.toFixed(2));

                    }

                    cuotas();

                } else {

                    alert("Fondos insuficientes");
                    carrito();

                }
            
            } else {

                pago();

            }

        // Funcion para mostrar las cuotas y calcular el vuelto
        // ==================-==================
        function cuotas() {

            do {
            
            opcionCuotas = Number(prompt(`Seleccione la cantidad de cuotas: \n
            1) 1 Cuota: 1x USD ${precioCuotas[0]} \n
            2) 3 Cuotas: 3x USD ${precioCuotas[2]} \n
            3) 6 Cuotas: 6x USD ${precioCuotas[5]} \n
            4) 12 Cuotas: 12x USD ${precioCuotas[11]} \n
            0) Volver`));
            
                switch (opcionCuotas) {
                
                    case 1:
                        
                        alert(`¡Compra en 1 cuota de USD ${precioCuotas[0]}, realizada!`);
                        vuelto = disponibleTarjeta - precioMasInteres;
                        alert(`Le han sobrado: USD ${vuelto.toFixed(2)}`);
                        alert("¡Volviendo al menú de productos!");
                        opcionCuotas = 0;
                        carrito();

                    break;
                    
                    case 2:
                        
                        alert(`¡Compra en 3 cuotas de USD ${precioCuotas[2]}, realizada!`);
                        vuelto = disponibleTarjeta - precioCuotas[2];
                        alert(`Le han sobrado: USD ${vuelto.toFixed(2)}`);
                        alert("¡Volviendo al menú de productos!");
                        opcionCuotas = 0;
                        carrito();
                        
                    break;
                    
                    case 3:
                        
                        alert(`¡Compra en 6 cuotas de USD ${precioCuotas[5]}, realizada!`);
                        vuelto = disponibleTarjeta - precioCuotas[5];
                        alert(`Le han sobrado: USD ${vuelto.toFixed(2)}`);
                        alert("¡Volviendo al menú de productos!");
                        opcionCuotas = 0;
                        carrito();
                        
                    break;
                    
                    case 4:
                        
                        alert(`¡Compra en 12 cuotas de USD ${precioCuotas[11]}, realizada!`);
                        vuelto = disponibleTarjeta - precioCuotas[11];
                        alert(`Le han sobrado: USD ${vuelto.toFixed(2)}`);
                        alert("¡Volviendo al menú de productos!");
                        opcionCuotas = 0;
                        carrito();
                        
                    break;
                
                    case 0:
                        
                        alert("¡Volviendo al menú de pagos!");
                        pago();

                        break;
                    
                    default:

                        alert("Opción incorrecta");
                        cuotas();

                        break;
                    
                }

            } while (opcionCuotas != 0);
            
        }
        // ==================-==================

        }
        // ==================-==================

    }   
    // ==================-==================

}
// ==================-==================


// Lista de productos mostrados en consola
// ==================-==================
console.log("Lista de productos disponibles: ")
console.log("===============================")
console.log(producto1);
console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log("===============================")
// ==================-==================

// Mensaje de bienvenida e inicio del programa
// ==================-==================
alert("¡Bienvenido a Banifox!");
ingreso();
// ==================-==================

