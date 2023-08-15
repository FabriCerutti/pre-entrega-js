    alert("Calculadora de costo para saber si te queda plata para poder ir al supermercado")
    const salario = parseInt(prompt("ingresa tu salario"));
    
    function costoVida(gastoAlquiler, gastoLuz, gastoGas, gastoAgua, gastoExpensas, gastoInternet){
        const sumaDegastoTotal = gastoAlquiler + gastoLuz + gastoGas + gastoAgua + gastoExpensas + gastoInternet
        const gastoTotal = sumaDegastoTotal 
        if(salario > gastoTotal){
            alert("podes ir al supermercado")
        } else{
            alert("no podes ir al supermercado")
        }
    }
    
    const gastoAlquiler = parseFloat(prompt("ingresa el valor del alquiler"));
    const gastoLuz = parseFloat(prompt("ingresa el valor de la luz"));
    const gastoGas = parseFloat(prompt("ingresa el valor del gas"));
    const gastoAgua = parseFloat(prompt("ingresa el valor del agua"));
    const gastoExpensas = parseFloat(prompt("ingresa el valor del expensas"));
    const gastoInternet = parseFloat(prompt("ingresa el valor del internet"));

    costoVida(gastoAlquiler, gastoLuz, gastoGas, gastoAgua, gastoExpensas, gastoInternet)