const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5,
}

const copiaPokemon1 = {...pokemon1}
copiaPokemon1.nome = "Squirtle"
copiaPokemon1.tipo = "água"
pokemon1.ataques = []
pokemon1.ataques.push({
    nome: "Investida", 
    dano: 40, 
    tipo: "Normal", 
    precisao: 100})
    copiaPokemon1.ataques = [...pokemon1.ataques]
    pokemon1.ataques.push({
    nome: "folha navalha",
    dano: 45,
    precisão: 100,
    tipo: "grama"})
copiaPokemon1.ataques.push({
    nome: "jato de agua",
    dano: 40,
    precisão: 100,
    tipo: "agua"})  


console.log(pokemon1)
console.log(copiaPokemon1)