//Parte 1
let nome //a)
let idade //b)

console.log(typeof nome) //c)
console.log(typeof idade)
//d) ambos apareceram como undefined porque não foram definidos

nome=prompt("Qual é o seu nome") //e)
idade=prompt("Quantos anos você tem?")

console.log(typeof nome) //f)
console.log(typeof idade)
//ambas são strings agora, pois prompt transforma em string

console.log("Olá "+nome+", você tem "+idade+" anos.") //g)