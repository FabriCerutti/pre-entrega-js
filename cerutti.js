    //calculadora de gastos 
    
    //mensaje de entrada
    alert("Calculadora de gastos")

    // Objeto que representa un gasto
    function Gasto(nombre, cantidad) {
    this.nombre = nombre;
    this.cantidad = cantidad;
  }
  
    // Array para almacenar los gastos
    let listaGastos = [];
  
    // Función para agregar un gasto a la lista
    function agregarGasto(nombre, cantidad) {
    let nuevoGasto = new Gasto(nombre, cantidad);
    listaGastos.push(nuevoGasto);
  }
  
    // Función para calcular el total de gastos
    function calcularTotalGastos() {
        let total = 0;
        for (let gasto of listaGastos) {
      total += gasto.cantidad;
    }
    return total;
  }
  
    // El usuario ingresa el nombre del gasto y la cantidad del gasto
    while (true) {
    let nombreGasto = prompt("Ingrese el nombre del gasto (o 'fin' para finalizar):");
    if (nombreGasto.toLowerCase() === "fin") {
      break;
    }
    let cantidadGasto = parseFloat(prompt("Ingrese la cantidad del gasto:"));
    agregarGasto(nombreGasto, cantidadGasto);
  }
  
     // Calcular el total de gastos
    let totalGastos = calcularTotalGastos();
  

    alert(`Total de gastos: $${totalGastos}`); 

    console.log(`Total de gastos: $${totalGastos}`);


