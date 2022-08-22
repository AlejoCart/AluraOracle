var pantalla= document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

pincel.fillStyle="grey";
pincel.fillRect(0,0,500,500);

	var x;
	var y;
	var radio=20;
	var contador=0;

function limpiarPantalla(){
	pincel.clearRect(0,0,500,500);
	pincel.fillStyle="grey";
	pincel.fillRect(0,0,500,500);

}

function cambiarUbicacion(){
	x= pantalla.offsetLeft+(Math.random()*500);
	y= pantalla.offsetTop+(Math.random()*500);
}
function diana(){

	limpiarPantalla();
	cambiarUbicacion();
	pincel.beginPath();
	pincel.fillStyle="red";
	pincel.arc(x,y,radio,0,2*Math.PI);
	pincel.fill();


}

function disparo(evento){
	var xDis=evento.pageX- pantalla.offsetLeft;
	var yDis=evento.pageY- pantalla.offsetTop;
		if(evento.button==0){

			if((xDis<x+radio) && (xDis>x-radio)&& (yDis<y+radio) && (yDis>y-radio))
			contador++;}

	else if(evento.button==2){
	alert(contador);
	contador=0;	
	} 
	return false;
}


setInterval(diana,500);
pantalla.onclick=disparo;
pantalla.oncontextmenu=disparo;
