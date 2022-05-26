const bases = prompt("Ingrese la base").toLowerCase()
const TipodePan = prompt("Ingrese el tipo de pan").toLowerCase()
const Ingredientes = prompt("Ingrese el/los Tipos de Ingredientes").toLowerCase()


let total = 0;
if (base === "carne"){
    total +- 200; 
} 
else if (base === "pollo") {
    total += 150;
}
else if (base === "veggie") {
    total += 100;
}

if (Pan === "Blanco"){
    total +- 50; 
} 
else if (pan === "negro") {
    total += 60;
}
else if (pan === "veggie") {
    total += 75;
}

if (Ingredientes.includes ("tomate")){total += 15;}
if (Ingredientes.includes ("lechuga")){total += 10;}
if (Ingredientes.includes ("queso")){total += 20;}

alert(total);







// Ej sandwich JS
//var carne = '200'
///var pollo = '150'
//var Veggie = '100'
//var Panblanco = '50'
//var Pannegro = '60'
//var Pansinglutten = '75'
//var Queso = '20'
//var tomate = '15'
//var lechuga = '10'
//var cebolla = '15'
//var mayonesa = '5'
//var mostaza= '5'

//var base = { carne, pollo, Veggie}
//ar pan = {Panblanco, Pannegro, Pansinglutten}
//var extras = {Queso, tomate, lechuga, cebolla, mayonesa, mostaza}

//function preciosandwich (base, pan, extras) {    }

