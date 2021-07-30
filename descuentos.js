//Función para calcular precio con descuento, recibe precio original y el porcentaje de descuento a aplicar
const precioConDescuento = (precioOriginal, porcentajeDescuento) => ((precioOriginal * (100 - porcentajeDescuento))/100) ;

//Cambios en entradas para actualizar
const input1 = document.getElementById('inputPrecioOriginal');
input1.addEventListener('input', mostrarPrecio);

const input2 = document.getElementById('inputPorcentajeDescuento');
input2.addEventListener('input', mostrarPrecio);


//Función para obtener datos de entrada y actualizar la salida
function mostrarPrecio(){
    let input = document.getElementById('inputPrecioOriginal');
    const precioOriginal = Number(input.value);
    input = document.getElementById('inputPorcentajeDescuento');
    const porcentajeDescuento = Number(input.value);
    resultado = precioConDescuento(precioOriginal, porcentajeDescuento);
    mostrarResultado = document.getElementById('precioConDescuento');
    mostrarResultado.textContent = "$" + resultado;
};