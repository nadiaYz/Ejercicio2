//CASO ECOMMERCE

//* TODO TIENEN QUE ESTAR DENTRO DE FUNCIONES
//* LA ÚNICA VARIABLE GLOBAL VA A SER LA DEL ARRAY
//* EL ARRAY DE OBJETOS PUEDE ESTAR EN EL MISMO CÓDIGO O EN OTRO ARCHIVO

//1) Hacer un array de objetos que tenga 15 productos. Cada objeto deberá tener las siguientes propiedades:
//    - id --> number
//    - producto --> nombre del producto
//    - precio --> number
//    - fechaVencimiento (en el caso de que tenga una) ---> string
//    - descripción --> string
//    - categoría (si tiene una) ---> string
//   - oferta (booleano) --> true o false

//Quiero que algunos de los elementos tengan un true en oferta.

const arrayProductos = [
    { id: 123 , producto: 'Leche' , precio:34, fechaVencimiento: '15/12/22' , descripción:'100% pura de vaca, semidescremada.' , categoría: 'Lácteos' , oferta: false},
    { id: 456 , producto: 'Pan' , precio:42, fechaVencimiento: '24/01/23' , descripción:'Pan blanco grande 680g.' , categoría: 'Pan y tortillas' , oferta: true},
    { id: 789 , producto: 'Galletas' , precio:38, fechaVencimiento: '02/02/23' , descripción:'Galletas con chispas sabor chocolate 5 paquetes.' , categoría: 'Galletas' , oferta: false},
    { id: 321 , producto: 'Salsa' , precio:28, fechaVencimiento: '12/01/23' , descripción:'Salsa picante de guacamole 445g.' , categoría: 'Salsas caseras' , oferta: false},
    { id: 654 , producto: 'Huevos' , precio:85, fechaVencimiento: '08/01/23' , descripción:'Huevo blanco fresco 30pzas.' , categoría: 'Lácteos' , oferta: false},
    { id: 987 , producto: 'Queso' , precio:195, fechaVencimiento: '23/01/23' , descripción:'Queso manchego rebanado 800g.' , categoría: 'Lácteos' , oferta: true},
    { id: 147 , producto: 'Jamón' , precio:62, fechaVencimiento: '13/01/23' , descripción:'Jamón de pavo 450g.' , categoría: 'Salchichonería' , oferta: true},
    { id: 258 , producto: 'Arroz' , precio:30, fechaVencimiento: '16/12/24' , descripción:'Arroz de grano grueso 900g.' , categoría: 'Semillas' , oferta: false},
    { id: 369 , producto: 'Tortillas' , precio:20, fechaVencimiento: '30/12/22' , descripción:'Tortillas de harina 306g.' , categoría: 'Pan y tortillas' , oferta: false},
    { id: 741 , producto: 'Cereal' , precio:70, fechaVencimiento: '08/03/23' , descripción:'Cereal de maíz sabor chocolate 650g.' , categoría: 'Cereales' , oferta: true},
    { id: 852 , producto: 'Café' , precio:118, fechaVencimiento: '13/10/24' , descripción:'Café soluble descafeinado 170g.' , categoría: 'Café, té y sustitutos' , oferta: false},
    { id: 963 , producto: 'Té' , precio:55, fechaVencimiento: '07/09/25' , descripción:'Té de manzanilla, 100 sobres de 1.2g c/u.' , categoría: 'Café, té y sustitutos' , oferta: false},
    { id: 153 , producto: 'Avena' , precio:59, fechaVencimiento: '25/06/24' , descripción:'Hojuelas de avena integral 475g.' , categoría: 'Cereales' , oferta: false},
    { id: 426 , producto: 'Aceite' , precio:56, fechaVencimiento: '14/04/23' , descripción:'100% pura de canola. 845ml.' , categoría: 'Aceites de cocina' , oferta: true},
    { id: 759 , producto: 'Jabón' , precio:62 , fechaVencimiento: null, descripción:'Jabón corporal, antibacterial.' , categoría: 'Higiene y cuidado corporal' , oferta: false}
];

//2) Utilizar un método de array que verifique si oferta es true, en el caso de que lo sea, haga un 15%, 5%, 20%, 10% de descuento (elijan el descuento que quieran).

function porcentajeOfertas (productos) {
    const verificacion = productos.map((producto) => {
        let nuevoProducto ={...producto}
        if(nuevoProducto.oferta) {
            nuevoProducto.precio = nuevoProducto.precio - (nuevoProducto.precio * .10) 
            return nuevoProducto
        }
        else{
            return nuevoProducto
        }
    })
    return verificacion
}
console.log (porcentajeOfertas(arrayProductos))

//3) Utilizando un método de array, que ordene a los elementos de manera alfabética (a - z o z - a), como ustedes prefieran. También pueden ordenar por número de id (ascendente o descendente).
//Usen este método haciendo una copia segura del array. Pueden copiar el array de manera segura con los siguientes métodos: 
//    - [...array] ---> spread operator
//    - array.slice() ---> copia segura en otra variable
//    - [].concat(array) ---> copia segura en otra variable

function organizacion (productos) {
    let copiaArray = [...productos].map((producto) => {return {...producto}})
    copiaArray.sort(comparacion)
    function comparacion(a, b){
        if(a.producto < b.producto) {
            return -1
        }
        else {
            if(a.producto = b.producto) {
                return 0
            } 
            else {
                return 1
            }
        }
        
    }
    return copiaArray
}
console.log(organizacion (arrayProductos))

//4) A través de un confirm, pregúntele al usuario si quiere ver las ofertas de la tienda. En el caso de que si, entonces con filter, filtre el array y que muestre en consola cada una de las ofertas.

function oferta (productos) {
        if (confirm (`¿Quiere ver las ofertas de la tienda?`)) {
            let productosFiltrados = productos.filter((producto) => {
                producto.oferta 
                if(producto.oferta) {
                    return true
                }
                else {
                    return false
                }
            })
            return productosFiltrados
        }
        else {
            return productos
        }
}
console.log(oferta(arrayProductos))

//5) A través de un prompt, permita al usuario buscar productos. Una vez que ingrese un producto, busquen con find dicho producto y muestrelo en un alert().

function buscarProductos (productos) {
    let buscarProducto = prompt('Busque un producto');
    const encontrado = productos.find((producto) => {
        if (producto.producto == buscarProducto) {
            return true
        }
        else {
            return false 
        }
    })
    if (encontrado == null) {
        alert("No se encontró el producto")
    }
    else {
    alert (`Producto: ${encontrado.id} ${encontrado.producto} ${encontrado.precio} ${encontrado.fechaVencimiento} ${encontrado.descripción} ${encontrado.categoría}`)
    }
}
buscarProductos(arrayProductos);