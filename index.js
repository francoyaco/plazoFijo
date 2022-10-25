confirm('Bienvenido al simulador de plazo fijo')

// pregunto al usuario cuantas cotizaciones quiere hacer
// esto le dara el valor final del ciclo FOR
let end = parseInt ( prompt('¿Cuantas cotizaciones vas a necesitar realizar?'))

// bucle que va a solicitar datos la cantidad de veces establecida
for (let index = 1; index <= end; index++) {

// Pido los datos para obtener una cotizacion (Capital y dias) 
// Monto
let monto = parseInt (prompt('Ingrese un monto a invertir hasta $1.000.000'))
// Dias
let dias = parseInt ( prompt('Ingrese la cantidad de dias'))


// Revisamos el monto a cotizar
if(monto > 1000000 || dias > 365 ) {
    
    alert('Alguno de los datos ingresados no es valido')

}
else {

// Con los datos obtenidos realizamos los calculos en base a la tasa anual estipulada. 
const tasa =  75/365  
let parcial = monto * ( tasa *  dias ) /100
let resultado = parcial + monto
// devolvemos el resultado esperado..
alert (`El interes sumado al capital sera de ${resultado}`)
    
}}

