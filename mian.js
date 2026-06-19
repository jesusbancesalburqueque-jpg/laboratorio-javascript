console.log("Iniciando laboratorio 1 de la unidad 3");

let edad = 20;
let esEstudiante = true;

console.log(typeof edad);
console.log(typeof esEstudiante);

let nombre = "Jesús";

let saludo = `Hola $(nombre), tienes $(edad) años`;

console.log(saludo);

let mensaje = `
Este es mi laboratorio:
Semana 12,
Unidad 3
`;

console.log(mensaje);

let sabor = "chocolate";

if (sabor == "chocolate") {
    console.log("El sabor es chocolate");
} else {
    console.log("Elijiste otro sabor");
}

let opcion = 2;

switch(opcion) {
    case 1:
        console.log("Opción seleccionada: 1");
        break;
    case 2:
        console.log("Opción seleccionada: 2");
        break;
    case 3:
        console.log("Opción seleccionada: 3");
        break;
    default:
        console.log("Opción inválida");
}

for(let i = 1; i <= 10; i++) {
    console.log(`Iteración número: ${i}`);
}