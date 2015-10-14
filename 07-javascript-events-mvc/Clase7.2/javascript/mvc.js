

var modelo = function (contenedor) {
	var self = {};

	var inputTexto = contenedor.querySelector('.texto');
	var inputNumero = contenedor.querySelector('.numero');
	var boton = contenedor.querySelector('.accion');
	var resultado = contenedor.querySelector('.resultado');

	var txt = "";
	var num = 0;

	self.numero = function (value) {
		if (value !== undefined) {
			num = +value;
			inputNumero.value = num;
		} else {
			return num;
		}
		return self;
	}

	self.texto = function (value) {
		if (value !== undefined) {
			txt = value;
			inputTexto.value = txt;
		} else {
			return txt;
		}
		return self;
	}

	inputTexto.addEventListener("change", function (event) {
		txt = this.value;
	});

	inputNumero.addEventListener("change", function (event) {
		num = +this.value;
	});

	boton.addEventListener("click", function (event) {
		resultado.value = txt + num;
	});

	return self;

};

var misModelos = [];

var contenedores = document.querySelectorAll('.contenedor');

for (var i = 0; i < contenedores.length; i++) {
	misModelos.push(modelo(contenedores[i]));
}


