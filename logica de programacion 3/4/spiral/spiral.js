	var pantalla= document.querySelector("canvas");
	var pincel= pantalla.getContext("2d");

	pincel.fillStyle="grey";
	pincel.fillRect(0,0,500,500);
	pincel.fill();

	function dibujarEspiral(evento){

		var x= evento.pageX- pantalla.offsetLeft;
		var y= evento.pageY- pantalla.offsetTop;
		pincel.beginPath();
		pincel.bezierCurveTo()
		pincel.fillStyle="red";
		for(var i=1;i>=100;i++){

			pincel.arc(x+i,y+i,i,i,3.14);
			pincel.fill()

		}

	}

	pantalla.onclick= dibujarEspiral;

	