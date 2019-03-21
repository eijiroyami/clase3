const fs = require('fs');
const paises = JSON.parse(fs.readFileSync('./src/data/paises.json','utf8'));

console.log(`numero de registros: ${paises.length}`)


const sudAmerica = paises.filter((pais)=>{
    return pais.subregion === 'South America'
})
console.log(`numero de paises en America: ${sudAmerica.length}`)

let maxim = []
sudAmerica.forEach(pais => {
    maxim.push(pais.population)
    console.log(`${pais.name} poblacion ${pais.population}`)
});
console.log(Math.max(...maxim))

let paismax = sudAmerica.filter(pais => {
    return pais.population === Math.max(...maxim);
})
console.log(`el pais ${paismax[0].name} que tiene mas poblacion ${Math.max(...maxim)}`)

let poblaciones = []
sudAmerica.forEach(pais =>{
    poblaciones.push({
        nombre: pais.name,
        nativo: pais.nativeName,
        capital: pais.capital,
        poplacion: pais.population
    })
})


console.log(poblaciones)

const bolivia = paises.find(pais => pais.nativeName == 'Bolivia');
console.log(bolivia.name)

//tarea filtrar paices centroamericasnos y contiente africano
//guardar en un archivo json
//

const centroAmerica = paises.filter((pais)=>{
    return pais.subregion === 'Central America'
})
const Africa= paises.filter((pais)=>{
    return pais.region === 'Africa'
})


console.log("PAISES DE CENTROAMERICA")
centroAmerica.forEach(pais => {
    console.log(pais.name)
})
console.log("PAISES DE AFRICA")
Africa.forEach(pais => {
    console.log(pais.name)
})

let poblacionCentroAmerica = []
centroAmerica.forEach(pais =>{
    poblacionCentroAmerica.push({
        nombre: pais.name,
        nativo: pais.nativeName,
        capital: pais.capital,
        poplacion: pais.population
    })
})
let poblacionAfrica = []
Africa.forEach(pais =>{
    poblacionAfrica.push({
        nombre: pais.name,
        poplacion: pais.population,
        capital: pais.capital,
        nativo: pais.nativeName                
    })
})


fs.writeFile('./src/data/centroamerica.json', JSON.stringify(poblacionCentroAmerica, null, 2), error => {
    if(error)
        console.log(error);
    else
        console.log(`${new Date().getMilliseconds()} : 'archivo creado con exito'`);
});

fs.writeFile('./src/data/africa.json', JSON.stringify(poblacionAfrica, null, 2), error => {
    if(error)
        console.log(error);
    else
        console.log(`${new Date().getMilliseconds()} : 'archivo creado con exito'`);
});

//obtener un objeto 

let detallepais = []

detallepais = {
    "titulo": centroAmerica[0].subregion,
    "numero_paises": poblacionCentroAmerica.length,
    "detalle": poblacionCentroAmerica
}

fs.writeFile('./src/data/detallecentroamerica.json', JSON.stringify(detallepais, null, 2), error => {
    if(error)
        console.log(error);
    else
        console.log(`${new Date().getMilliseconds()} : 'archivo creado con exito'`);
});