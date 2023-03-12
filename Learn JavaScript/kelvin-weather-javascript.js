const kelvin = 273      // kelvin with constant value 293

// Convert to Celsius
const celsius = kelvin - 273  // Celsius is 273 degrees less than Kelvin. 

// Convert to Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32   // Fahrenheit = Celsius * (9/5) + 32
fahrenheit = Math.floor(fahrenheit)       // round down the Fahrenheit temperature.

// Convert to Newton
let newton = celsius * (33 / 100)         // Newton = Celsius * (33/100)
newton = Math.floor(newton)               // round down the newton temperature.

console.log(`The temperature is ${kelvin} degrees Kelvin.`)

console.log(`The temperature is ${celsius} degrees Celsius.`)

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

console.log(`The temperature is ${newton} degrees Newton.`)
