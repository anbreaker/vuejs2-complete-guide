// operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario = { nome: "Magalí", salario: 12348.99 }
const clone = { ativo: true, ...funcionario }

console.log({ clone })

// usar spread com array
const grupoA = ["João", "Pedro", "Gloria"]
const grupoFinal = ["Magalí", ...grupoA, "Rafaela"]

console.log({ grupoA })
console.log({ grupoFinal })
