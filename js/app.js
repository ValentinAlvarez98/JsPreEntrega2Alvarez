// Variables globales
// ==================-==================
let usuarios = [];
let productosEnCarrito = [];
let nombresProductos = [];
let preciosProductos = [];
let opcionIngreso = 0;
let opcionProductos = 0;
let opcionProductosCarrito = "";
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

function Usuario(nombreUsuario, passwordUsuario) {
    this.nombreUsuario = nombreUsuario;
    this.passwordUsuario = passwordUsuario;
}

// ==================-==================

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
const producto3 = new Producto("GIGABYTE PLACA A520M-H", 98, "MOTHERBOARD", "GIGABYTE", "BFXGBP98");
const producto4 = new Producto("NETAC MEMORIA SHADOW DDR4-3200 16GB GREY NTSDD4P32SP-16E", 55, "MEMORIA RAM", "NETAC", "BFX32SP1");
const producto5 = new Producto("GIGABYTE FUENTE 1000W GP-P1000GM 80 PLUS GOLD", 208, "FUENTES", "GIGABYTE", "BFXGBTP1000");
const producto6 = new Producto("WESTERN DIGITAL SSD M.2 BLACK NVME SN750 SE 1TB", 157, "SSD M.2" , "WESTERN DIGITAL", "BFX1TB1");
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

            let usuarioAIngresar = {
                nombreUsuario: usuarioIngresado.toLowerCase(),
                passwordUsuario: contraseniaIngresada
            }

            const compararUsuarios = usuarios.find(usuario => (usuario.nombreUsuario === usuarioAIngresar.nombreUsuario) && (usuario.passwordUsuario === usuarioAIngresar.passwordUsuario));
        

            if ((compararUsuarios !== undefined) && (usuarioIngresado !== "true") && (contraseniaIngresada !== "true")) {

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

                        if (usuarioRegistro != "" && contraseniaRegistro != "") {

                            let usuarioARegistrar = {
                                nombreUsuario: usuarioRegistro.toLowerCase(),
                                passwordUsuario: contraseniaRegistro
                            }

                            const compararUsuarios = usuarios.find(usuario => (usuario.nombreUsuario === usuarioARegistrar.nombreUsuario) && (usuario.passwordUsuario === usuarioARegistrar.passwordUsuario));

                            if (compararUsuarios === undefined) {

                                const nuevoUsuario = new Usuario(usuarioARegistrar.nombreUsuario, usuarioARegistrar.passwordUsuario);

                                usuarios.push(nuevoUsuario);

                                alert("¡Usuario registrado correctamente!");

                            } else {

                                alert("Usuario ya registrado");

                            }

                        } else {

                            alert("No puede ingresar un espacio vacio, intentelo de nuevo");

                        }

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
    
    do {

    opcionProductos = Number(prompt(`Seleccione los productos deseados: \n
    1) Tarjeta de video:` + " " + `${producto1.nombreProd} \n 
    USD ${producto1.precioProd} \n
    2) Procesador:` + " " + `${producto2.nombreProd} \n
    USD ${producto2.precioProd} \n
    3) Motherboard:` + " " + `${producto3.nombreProd} \n
    USD ${producto3.precioProd} \n
    4) Memoria RAM:` + " " + `${producto4.nombreProd} \n
    USD ${producto4.precioProd} \n
    5) Ver carrito \n
    0) Volver \n`));
        
        switch (opcionProductos) {

            case 1:
                
                producto1.productoSeleccionado();
                precioAPagar = producto1.precioProd;
                productosCarrito();

            break;
        
            case 2:
                
                producto2.productoSeleccionado();
                precioAPagar = producto2.precioProd;
                productosCarrito();

            break;
            
            case 3:
                
                producto3.productoSeleccionado();
                precioAPagar = producto3.precioProd;
                productosCarrito();

            break;
            
            case 4:
                
                producto4.productoSeleccionado();
                precioAPagar = producto4.precioProd;
                productosCarrito();

                break;
            
            case 5:

                productosEnCarrito = [...nombresProductos, ...preciosProductos];

                if (productosEnCarrito.length === 0) {

                    alert("No hay productos en el carrito");

                    break;

                } else {

                    alert(`Productos en el carrito: \n
                    ${productosEnCarrito.join("\n")}`);
                    continuar();

                }
            
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

    function productosCarrito() {
        
        
            opcionProductosCarrito = prompt(`¿Desea ver los productos que añadió a su carrito? \n
            S/N\n`);

            if (opcionProductosCarrito == "S" || opcionProductosCarrito == "s") {

                productosEnCarrito = [...nombresProductos, ...preciosProductos];

                if (productosEnCarrito.length === 0) {

                    alert("No hay productos en el carrito");   

                } else {

                    alert(`Productos en el carrito: \n
                    ${productosEnCarrito.join("\n")}`);
                    continuar();

                }
            
            } else if (opcionProductosCarrito == "N" || opcionProductosCarrito == "n") {

                continuar();

            } else {

                alert("Opción incorrecta");
                productosCarrito();

            }
            
    }

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
                    alert(`Le han sobrado: USD ${vuelto}`);
                    alert("¡Volviendo al menú de productos!");
                    productosEnCarrito = [];
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
                        productosEnCarrito = [];
                        opcionCuotas = 0;
                        carrito();

                    break;
                    
                    case 2:
                        
                        alert(`¡Compra en 3 cuotas de USD ${precioCuotas[2]}, realizada!`);
                        vuelto = disponibleTarjeta - precioCuotas[2];
                        alert(`Le han sobrado: USD ${vuelto.toFixed(2)}`);
                        alert("¡Volviendo al menú de productos!");
                        productosEnCarrito = [];
                        opcionCuotas = 0;
                        carrito();
                        
                    break;
                    
                    case 3:
                        
                        alert(`¡Compra en 6 cuotas de USD ${precioCuotas[5]}, realizada!`);
                        vuelto = disponibleTarjeta - precioCuotas[5];
                        alert(`Le han sobrado: USD ${vuelto.toFixed(2)}`);
                        alert("¡Volviendo al menú de productos!");
                        productosEnCarrito = [];
                        opcionCuotas = 0;
                        carrito();
                        
                    break;
                    
                    case 4:
                        
                        alert(`¡Compra en 12 cuotas de USD ${precioCuotas[11]}, realizada!`);
                        vuelto = disponibleTarjeta - precioCuotas[11];
                        alert(`Le han sobrado: USD ${vuelto.toFixed(2)}`);
                        alert("¡Volviendo al menú de productos!");
                        productosEnCarrito = [];
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

// Mensaje de bienvenida e inicio del programa
// ==================-==================
alert("¡Bienvenido a Banifox!");
ingreso();
// ==================-==================

