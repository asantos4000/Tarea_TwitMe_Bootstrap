function Twit(chat) {
	this.chat = chat;
	//this.desc = desc;
}

//metodo de la clase
/* Twit.imprimir = funtion() {
	console.log('Hola !!');
} */

Twit.mychat = [];

// var twit = new Twit('Titulo', 'Lorem,,,')

// Twit.imprimir(); //Metodo de la clase, funciona
// twit.imprimir(); // no funciona los metodos clase para instancia

// obtener tiutlo y desciption y agregar sus valores aun arreglo

Twit.enviar = function(e) {
	
	e.preventDefault(); // previen el comportamiento del formulario	
	var chat = document.getElementById('chat').value;
	var mychat = new Twit(chat);
	Twit.mychat.push(mychat);
	console.log(Twit.mychat);
	Twit.cancelar(e);
	Twit.mostrar();
	//Twit.guardar();
}


Twit.cancelar = function(e) {
	e.preventDefault(); // previen el comportamiento del formulario	
	var chat = document.getElementById('chat');
	//var desc = document.getElementById('desc');
	chat.value ='';
	//desc.value ='';
}

Twit.mostrar = function(){
	var comentarios = '';
	Twit.mychat.map(function(elemento, indice) {
		//comentarios = comentarios + '<article>'
		//				+ '<h2>' + elemento.titulo +
		//				'</h2<p>' + elemento.desc +		
		//				'</p></article>';
		comentarios += '<option>'  
					+  '<h2>' + elemento.chat + '</h2>'
					+  '</option>';
					
		
		
	});


//<div id="" style="overflow:scroll; height:400px;">
//</div>


	document.getElementById('comentarios').innerHTML = comentarios;
}


Twit.guardar = function() {

	var twits = Twit.twits;
	var twitsEncode = JSON.stringify(twits);
	localStorage.setItem('twits', twitsEncode);

}


Twit.obtenerTwits = function() {

	var twitsEncode = localStorage.getItem('twits');
	if (twitsEncode === !null) {
	var twits = JSON.parse(twitsEncode);
	Twit.twits = twits;
	}
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
