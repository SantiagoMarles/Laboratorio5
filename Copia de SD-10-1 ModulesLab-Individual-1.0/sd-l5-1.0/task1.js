export function costCalculator(cantidadTransaccion) {
    let costoTotal = (cantidadTransaccion + (cantidadTransaccion * 0.01) + 3);
    return costoTotal;
}

console.log(costCalculator(124));