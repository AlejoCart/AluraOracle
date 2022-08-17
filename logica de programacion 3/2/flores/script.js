    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = "lightgray";
    pincel.fillRect(0, 0, 600, 400);
    dibujarFlor(250,250);
    /*for(var i =0;i<4;i++){

        var x =prompt("Ingrese la x");
        var y =prompt("Ingrese la y");
        var radio =prompt("Ingrese el radio");
        var color =prompt("Ingrese el color");
        dibujarCirculo(x,y,radio,color);
    }*/

    function dibujarFlor(x, y){

        dibujarCirculo(x, y+20, 10, "blue");
        dibujarCirculo(x, y, 10, "red");
        dibujarCirculo(x, y-20, 10, "yellow");
        dibujarCirculo(x-20, y, 10, "orange");
        dibujarCirculo(x+20, y, 10, "black");
    }


    function dibujarCirculo(x, y, radio, color) {

        pincel.fillStyle = color;
        pincel.beginPath();
        pincel.arc(x, y, radio, 0, 2*3.14);
        pincel.fill();
    }
