function Twit(titulo,desc) {
	this.titulo = titulo;
	this.desc = desc;
}

//metodo de la clase
/* Twit.imprimir = funtion() {
	console.log('Hola !!');
} */

Twit.twits = [];

// var twit = new Twit('Titulo', 'Lorem,,,')

// Twit.imprimir(); //Metodo de la clase, funciona
// twit.imprimir(); // no funciona los metodos clase para instancia

// obtener tiutlo y desciption y agregar sus valores aun arreglo

Twit.aceptar = function(e) {
	
	e.preventDefault(); // previen el comportamiento del formulario	
	var titulo = document.getElementById('titulo').value;
	var desc = document.getElementById('desc').value;
	var twit = new Twit(titulo, desc)
	Twit.twits.push(twit);
	console.log(Twit.twits);
	Twit.cancelar(e);
	Twit.mostrar();
	Twit.guardar();
}


Twit.cancelar = function(e) {
	e.preventDefault(); // previen el comportamiento del formulario	
	var titulo = document.getElementById('titulo');
	var desc = document.getElementById('desc');
	titulo.value ='';
	desc.value ='';
}

Twit.mostrar = function(){
	var comentarios = '';
	Twit.twits.map(function(elemento, indice) {
		//comentarios = comentarios + '<article>'
		//				+ '<h2>' + elemento.titulo +
		//				'</h2<p>' + elemento.desc +		
		//				'</p></article>';
		comentarios +=  '<article>' 
					+  '<h2>' + elemento.titulo + '</h2>'
					+  '<p>' + elemento.desc + '</p>'
					+  '</article>';
		
		
	});

	document.getElementById('comentarios').innerHTML = comentarios;
}


Twit.guardar = function() {

	var twits = Twit.twits;
	var twitsEncode = JSON.stringify(twits);
	localStorage.setItem('twits', twitsEncode);

}


Twit.obtenerTwits = function() {

	var twitsEncode = localStorage.getItem('twits');
	var twits = JSON.parse(twitsEncode);
	Twit.twits = twits;
}

Twit.obtenerTwits();
Twit.mostrar();



 



/*
<article>	
<h2>Titulo</2>

<p>
	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil sed architecto, officia iusto doloremque quia. Dolorem ab laudantium eum eius soluta, sapiente molestiae dolores in, aperiam quasi alias impedit delectus.

</p>
</article>	
*/
