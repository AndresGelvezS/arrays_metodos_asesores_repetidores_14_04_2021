
// let lista=new Array(5).fill('');
// Object.preventExtensions(lista);
//lista.push("mas");
// lista[3]="Hola"
// console.log (lista);
//Object.seal(lista);
//lista.push()

// let array=["A","B","C","D","E","F","G","H"];
// 
// array.fill("Andrés",3);
//array.fill("Andrés",-5);
//let i=-5, indice=((array.length-1)+i);
//console.log (indice)
// while (true) {
    // if(array.length-1)%2==0){
    //  array.fill("Miguel",i,);
    // }
    // 
// }
//console.log(array);

// let lista2=["A","B","C","D","E","F","G","H"];
// 
// const copia=lista2.slice(3);
//lista2.push("Andres");
// 
// console.log(lista2);
// console.log(copia);

// let listaAsc=["A","B","C","D"];
// listaAsc.reverse();
// console.log(listaAsc);
// 

//CREAR UNA LISTA (ARRAY)
//usando el metodo fill el rango de lista la
//puede ser opcional, almacenar diferentes
//animales  "acuaticos, terrestre. aereos" (lista anidadas)
//pedir al usuario cual lista desea ver de los animales
//usando el metodo slice,
//mostrar unas opciones para visualizar los datos
//ejemplo (ver todos, entre 1  y 10 y entre 5 y 10)
//si desea ver los datos  ASD O DES

let lista =new  Array(3).fill('');
let  acuaticos = new Array(parseInt(prompt("Registre la cantidad de animales acuáticos"))).fill('');
let  terrestres = new Array(parseInt(prompt("Registre la cantidad de animales  terrestres"))).fill('');
let  aereos = new Array(parseInt(prompt("Registre la cantidad de animales aéreos"))).fill('');
// 
 for (let i = 0; i < acuaticos.length; i++) {
     acuaticos[i] = prompt (`nombre de animal acuático ${i+1}`);
     
 }
 for (let i = 0; i < terrestres.length; i++) {
    terrestres[i] = prompt (`nombre de animal terrestre ${i+1}`);
    
}
for (let i = 0; i < aereos.length; i++) {
    aereos[i] = prompt (`nombre de animal aéreos ${i+1}`);
    
 }

lista.push(acuaticos);
lista.push(terrestres);
lista.push(aereos);

// let  acuaticos = new Array(parseInt(prompt("cuantos animales hay acuatico"))).fill('');
// for (let i = 0; i < acuaticos.length; i++) {
// acuaticos[i] = prompt (`nombre animal acuatico ${i+1}`);
// }
// lista.push(terrestre);
// let  terrestes = new Array(parseInt(prompt("cuantos animales hay terrestre"))).fill('');
// for (let i = 0; i < terrestre.length; i++) {
// terrestre[i] = prompt (`nombre animal terrestre ${i+1}`);
// }
// lista.push(aereo);
// let  aereos = new Array(parseInt(prompt("cuantos animales hay aereo"))).fill('');
// for (let i = 0; i < aereo.length; i++) {
// aereoe[i] = prompt (`nombre animal aereo ${i+1}`);
// }
console.log (lista);

let seleccionarlista = parseInt(prompt(`Escoja la lista que desea ver ${lista}: \n1. acuaticos \n2. terrestre \n3. aereo`));
if (seleccionarlista==1 || seleccionarlista==2 || seleccionarlista==3) {
    let tipoanimales;
    if (seleccionarlista==1) {
        alert (tipoanimales=`animales acuáticos ${acuaticos}`);       
    }
    if (seleccionarlista==2) {
        alert (tipoanimales=`animales terrestres ${terrestres}`);         
    }
    if (seleccionarlista==3) {
        aleert (tipoanimales=`animales aéreos ${aereos}`);      
    }
}

let modalidad = parseInt(prompt(`Escoja la lista que desea ver ${lista}: \n1. todos \n2. 1 a 5 \n3. 5 a 10`));
if (modalidad==1) {
    alert (tipoanimales=`animales acuáticos ${acuaticos}`,`animales terrestres ${terrestres}`,`animales aéreos ${aereos}` );
}
