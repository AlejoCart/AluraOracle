var pantalla= document.querySelector("canvas");
var puntero = pantalla.getContext("2d");

    var serie2009 = [6, 47, 41, 3, 3];
    var serie2019 = [81, 9, 3, 3, 4];
    var colores = ["blue","green","yellow", "red","gray"];
    dibujarBarra(50,100,serie2009,colores,"2009");
    dibujarBarra(250,100,serie2019,colores,"2019");



    function dibujarTexto(x,y,texto){
    	var pantalla= document.querySelector("canvas");
		var puntero = pantalla.getContext("2d");

		puntero.font="15px Georgia";
		puntero.fillStyle="black";
    	puntero.fillText(texto,x,y);

    }

    function dibujarBarra(x,y,serie,color,anho){
    	dibujarTexto(x,y-20,anho);
    	var yAbajo=0;
    	for(var i=0;i<serie.length;i++){

    	puntero.fillStyle=color[i];
    	puntero.fillRect(x,y+yAbajo,100,serie[i]);
    	yAbajo=yAbajo+serie[i];	
    
    	}
    	
    }
