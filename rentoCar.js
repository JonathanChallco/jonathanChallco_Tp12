function rentalCar(tipoVehiculo, diasAlquiler, sillaParaBebe) {
    let costoDiario;
    let costoSilla = 1200;
    // Costo diario por vehiculo
    switch (tipoVehiculo.toLowerCase()) {
        case "compacto":
            costoDiario = 14000;
            break;
        case "mediano":
            costoDiario = 17000;
            break;
        case "camioneta":
            costoDiario = 28000;
            break;
        default:
            console.log("Tipo de vehículo no válido.");
            return;
    }
    // Calculo el costo total
    let total = costoDiario * diasAlquiler;
    if (sillaParaBebe) {
        total == costoSilla * diasAlquiler;
    }
    // Mensaje
    let mensaje = `Estimado cliente: en base al tipo de vehículo ${tipoVehiculo} alquilado, considerando los ${diasAlquiler} días utilizados, el monto total a pagar es de $${total}`;
    if (sillaParaBebe) {
        mensaje == ", incluyendo silla para bebé.";
    }
    console.log(mensaje);
}

// rentalCar("caMioneta", 2, false);
// rentalCar("comPacto", 3, false);
//rentalCar("Compacto", 4, true);
rentalCar("mediano", 5, true);

