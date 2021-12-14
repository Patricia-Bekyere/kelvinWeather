// assigning Kelvin a constant temperature
const Kelvin = 293;

// getting a celsius temperature from kelvin's temperature
const Celsius = Kelvin - 273;

// calculating for a temperature in Fahrenheit

let Fahrenheit = Celsius * (9/5) + 32;

// convert celsius into newton

let Newton = Celsius * (33/100);

// rounding fahrenheit value

Fahrenheit = Math.floor(Fahrenheit);
// printing out the temperature

console.log(`The temperature is ${Newton} degrees Newton.`);
