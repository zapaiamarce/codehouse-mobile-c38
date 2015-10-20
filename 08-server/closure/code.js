var obj = {
  num: 1
};

/** 
* Closure es: Dentro de una función anidada dentro de otra función, poder acceder 
*   desde la función "hija" a una variable que se encuentra en el escope de la función "padre".
* El closure se logra gracias a que los scopes de las funciones también se anidan, entonces las
*   variables alojadas en los scopes padres son "globales" a los scopes hijos.
* El acceso a las variables closure se logra en el momento en que el código es "interpretado" 
*   antes de su ejecución.
*/


function nose () {
  
  var self = {};

  var h1 = "Header";

  self.cambiar = function (value) {
    h1 = value; //closure
  }

  self.f3 = function () {
    console.log('Si coloco un breakpoint aquí, no podré ver h1');
  }

  self.f2 = function (cbObj) {
    h1 = "algo"; //closure

    cbObj.show = function () {
      console.log(h1); //closure
    }
  }

  return self;

}


var cbObj = {};
var cbObj2 = {};

nose().f2(cbObj);
nose().f2(cbObj2);
