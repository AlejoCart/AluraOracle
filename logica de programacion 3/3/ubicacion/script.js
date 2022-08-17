var pantalla= document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

pincel.fillStyle="grey";
pincel.fillRect(0,0,500,500);

function dibujarCirculo(evento){

		var x= evento.pageX - pantalla.offsetLeft;
		var y= evento.pageY - pantalla.offsetTop;
		var colores =["red","yellow","green","blue","pink"];
		//alert("click en x: "+x+" y:" +y);
		pincel.beginPath();
		pincel.fillStyle=colores[Math.floor(Math.random()*colores.length)];
		pincel.arc( x,y,25,0,2*3.14);
		pincel.fill();

}

function exibirAlerta(evento){

var x= evento.pageX - pantalla.offsetLeft;
var y=evento.pageY - pantalla.offsetTop;

console.log(evento);
alert("click en x: "+x+" y:" +y);

}

pantalla.onclick = dibujarCirculo;