let lenguajes=['javascript','PHP','Python','JAVA']
let frameworks=['Reaact','Laravel','Django','Sprint']

//Unir arreglos en 1 solo
let combinacion = lenguajes.concat(frameworks)
console.log(combinacion)

let combinator = [...lenguajes,...frameworks]
console.log(combinator)

let [ultimo]=[...lenguajes].reverse()
console.log(ultimo)