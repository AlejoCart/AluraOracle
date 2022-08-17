    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");    
    pincel.fillStyle = "grey";
    pincel.fillRect(0,0,600,400); 
    var colores=["blue", "red", "green"]
    pincel.fillStyle = colores[0];

    function dibujarCirculo(evento){
        if(evento.button==0){
        var x = evento.pageX - pantalla.offsetLeft;
        var y = evento.pageY - pantalla.offsetTop;    
        pincel.beginPath();
        pincel.arc(x,y,10,0,2*3.14);
        pincel.fill();
        console.log(x + "," + y);
        }
        else if(evento.button==2){
            alterarColor();
        }
    }

    pantalla.onclick = dibujarCirculo;

    function alterarColor() {

        //alert("Funcionó");
        //alert("color"+pincel.fillStyle);

        if(pincel.fillStyle=="#0000ff")
            pincel.fillStyle=colores[1];
        else if(pincel.fillStyle=="#ff0000")
            pincel.fillStyle=colores[2];
        else pincel.fillStyle=colores[0]
        return false;//return false deshabilita el menu contextual.
    }

    pantalla.oncontextmenu = alterarColor;

/*
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");    
    pincel.fillStyle = "grey";
    pincel.fillRect(0,0,600,400); 
    var colores = ["blue", "red", "green"];
    var indiceColorActual = 0; // comienza con blue

    function dibujarCirculo(evento){
        var x = evento.pageX - pantalla.offsetLeft;
        var y = evento.pageY - pantalla.offsetTop;    
        pincel.fillStyle = colores[indiceColorActual];
        pincel.beginPath();
        pincel.arc(x,y,10,0,2*3.14);
        pincel.fill();
        console.log(x + "," + y);        
    }

    pantalla.onclick = dibujarCirculo;

    function alterarColor() {
        indiceColorActual++;
        if(indiceColorActual>= colores.length) {
             indiceColorActual = 0; //vuelve para el primer color, blue
        }
        return false; //menú contextual padrón de `canvas` no sea exhibido
    }

    pantalla.oncontextmenu = alterarColor;
 */