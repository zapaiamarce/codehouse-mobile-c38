var nombre;

nombre = 'Marcelo "profesor"';

var apellido = 'Zapaia';

var nombreCompleto = nombre + apellido;

console.log(apellido);
console.log(nombreCompleto);

apellido = 'Perez';

console.log(apellido);
console.log(nombreCompleto);

nombreCompleto = 'p';

console.log(apellido);
console.log(nombreCompleto);

var edad = 27;
console.log(edad+5)
console.log(edad)
edad = edad+9;
console.log(edad);

var cosas = [4,'marce',edad,[2,3,4],{
	marce:'hola',
	cosas
}];
var otraPalabra = cosas[1] + 'nueva palabra';

console.log(otraPalabra);
console.log(cosas);

var auto = { 
	marca:'bmw', 
	precio:1200000000,
	detalles:{
		estado:'nuevo'
	},
	colores:['azul','rojo']
};

console.log(auto.marca);
console.log(auto.detalles.estado);
console.log(auto.colores[0]);

auto.dueno = 'yo';
console.log(auto);