let cabalgatas = [];

function agregarCabalgata() {
  let cantidad = parseInt(
    prompt("Ingrese la cantidad de personas que va a realizar la cabalgata")
  );
  let cabalgata2hs = prompt("¿Desea realizar cabalgata de 2hs? si/no").toLowerCase();
  let cabalgata3hs = prompt("¿Desea realizar cabalgata de 3hs? si/no").toLowerCase();
  let precio = parseInt(prompt("Ingrese el precio de la cabalgata a realizar"));
  if (
    cabalgatas.some((item) => item.cabalgata2hs === cabalgata2hs) &&
    cabalgatas.some((item) => item.cabalgata3hs === cabalgata3hs)
  ) {
    alert("Ya existe esta opcion");} 
  else {
    alert("Su reservacion ha sido agregada correctamente");
    let objeto = {
      id: cabalgatas.length + 1,
      cantidad,
      cabalgata2hs,
      cabalgata3hs,
      precio,
    };
    cabalgatas.push(objeto);
    console.log(cabalgatas);
  }
}

// COMPRA DE PAQUETES

let personas = [];

const suma = (a, b) => a + b;
const resta = (a, b) => a - (a * b) / 100;
const iva = (x) => x * 1.21;

function comprarPaquete() {
  let cabalgata2hs = prompt(`Ingrese terminal de origen`).toLowerCase();
  let cabalgata3hs = prompt(`Ingrese terminal de destino`).toLowerCase();
  let dni = parseInt(prompt("Ingrese el DNI de la persona"));
  let nombrePersona = prompt("Ingrese NOMBRE Y APELLIDO de la persona");

  if (
    cabalgatas.some((item) => item.cabalgata2hs === cabalgata2hs) &&
    cabalgatas.some((item) => item.cabalgata3hs === cabalgata3hs)
  ) {
    let objeto = {
      id: personas.length + 1,
      cantidad: +1,
      cabalgata2hs,
      cabalgata3hs,
      precio,
      dni,
      nombrePersona,
    };
    personas.push(objeto);
    console.log(persona);
    alert("El paquete ha sido comprado con exito");
  } else if (
    cabalgatas.some((item) => item.cabalgata2hs != objeto) &&
    cabalgatas.some((item) => item.cabalgata3hs != objeto)
  ) {
    alert("USTED NO HA INGRESADO LAS OPCIONES CORRECTAMENTE");
  }
}

alert("INICIO DEL PROCESO DE AGREGADO DE PAQUETE");

let decisionPaquete = prompt(
  "¿desea agregar o seguir agregando algun paquete? si o no"
).toLowerCase();
while (decisionPaquete != "no" && decisionPaquete != "si") {
  alert("por favor ingresa si o no");
  decisionPaquete = prompt(
    "¿desea agregar o seguir agregando algun paquete? si o no"
  ).toLowerCase();
}

if (decisionPaquete == "si") {
  while (decisionPaquete != "no") {
    agregarCabalgata();
    decisionPaquete = prompt(
      "¿desea agregar o seguir agregando algun paquete? si o no"
    ).toLowerCase();
  }
} else if (decisionPaquete == "no") {
  alert("HA FINALIZADO EL PROCESO DE AGREGADO DE PAQUETES");
}

