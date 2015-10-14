

var modelo = function (contenedor) {
	var self = {};

	var textos = contenedor.querySelectorAll('.texto');

	var txts = {};

	for (var i = textos.length - 1; i >= 0; i--) {
		
		(function (name) {
			var input = textos[i];
			txts[name] = input.value;

			//JS -> View 
			self[name] = function (value) {
				if (value !== undefined) {
					txts[name] = value;
					input.value = txts[name];
				} else {
					return txts[name];
				}
				return self;
			};

			//View -> JS
			textos[i].addEventListener("change", function (event) {
				txts[name] = this.value;
			});
		})(textos[i].name);
	}

	return self;

};

var misModelos = [];

var contenedores = document.querySelectorAll('.contenedor');

for (var i = 0; i < contenedores.length; i++) {
	misModelos.push(modelo(contenedores[i]));
}


