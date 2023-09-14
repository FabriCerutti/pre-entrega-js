//calculadora de gastos 
    
   // Objeto que representa un gasto
function Gasto(nombre, cantidad) {
  this.nombre = nombre;
  this.cantidad = cantidad;
}

// Array para almacenar los gastos
let listaGastos = [];

// Función para agregar un gasto a la lista y actualizar la interfaz 
function agregarGasto() {
  const nombreGasto = document.getElementById("nombreGasto").value;
  const cantidadGasto = parseFloat(document.getElementById("cantidadGasto").value);

  if (nombreGasto && !isNaN(cantidadGasto)) {
      let nuevoGasto = new Gasto(nombreGasto, cantidadGasto);
      listaGastos.push(nuevoGasto);

      // Actualizar la lista de gastos y el total
      actualizarListaGastos();
      actualizarTotalGastos();

      // Limpiar los campos de entrada
      document.getElementById("nombreGasto").value = "";
      document.getElementById("cantidadGasto").value = "";
  }
}

// Función para calcular el total de gastos
function calcularTotalGastos() {
  let total = 0;
  for (let gasto of listaGastos) {
      total += gasto.cantidad;
  }
  return total;
}

// Función para actualizar la lista de gastos en la interfaz 
function actualizarListaGastos() {
  const listaGastosElement = document.getElementById("listaGastos");
  listaGastosElement.innerHTML = "";
  for (let gasto of listaGastos) {
      const listItem = document.createElement("li");
      listItem.textContent = `${gasto.nombre}: $${gasto.cantidad.toFixed(2)}`;
      listaGastosElement.appendChild(listItem);
  }
}

// Función para actualizar el total de gastos en la interfaz 
function actualizarTotalGastos() {
  const totalGastosElement = document.getElementById("totalGastos");
  totalGastosElement.textContent = calcularTotalGastos().toFixed(2);
}

// Manejar el clic en el botón "Agregar Gasto"
const agregarGastoButton = document.getElementById("agregarGasto");
agregarGastoButton.addEventListener("click", agregarGasto);

// Cargar gastos almacenados en localStorage al cargar la página
if (localStorage.getItem("gastos")) {
  listaGastos = JSON.parse(localStorage.getItem("gastos"));
  actualizarListaGastos();
  actualizarTotalGastos();
}

// Guardar gastos en localStorage cuando se agrega uno nuevo
function guardarGastosEnLocalStorage() {
  localStorage.setItem("gastos", JSON.stringify(listaGastos));
}

// Actualizar gastos en localStorage cuando se agrega uno nuevo
agregarGastoButton.addEventListener("click", guardarGastosEnLocalStorage);

// Borrar datos de localStorage cuando la página se refresca
window.addEventListener("beforeunload", function() {
  localStorage.clear();
});
