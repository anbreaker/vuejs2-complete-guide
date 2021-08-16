// Arrow Function
const soma = (a, b) => a + b
console.log(soma(2, 3))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametro default
function log(texto = "Node") {
  console.log(texto)
}

log()
log("Sou mais forte")

// operador rest
function total(...numeros) {
  let total = 0
  numeros.forEach((n) => (total += n))
  return total
}
console.log(total(2, 3, 4, 5))

// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na Notação Literal
const nome = "Carla"
const pessoa = {
  nome,
  ola() {
    return "Oi gente!"
  },
}

console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal {
  falar() {
    return "Au au!"
  }
}

console.log(new Cachorro().falar())
