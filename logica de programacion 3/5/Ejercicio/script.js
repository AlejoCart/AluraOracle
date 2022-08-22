    var pantalla = document.querySelector('canvas');
    var pincel = pantalla.getContext('2d');

    pincel.fillStyle = 'grey';
    pincel.fillRect(0, 0, 600, 400);
    var puedoDibujar = false;
    var xOffSet=pantalla.offsetLeft;
    var yOffSet=pantalla.offsetTop;
    var radio=5;
    var limiteX=150+xOffSet;
    var limiteY=50+yOffSet;

    function dibujarCirculo(evento) {

        if(puedoDibujar) {
            //Separa en menu y pantalla
            //if(evento.pageX>limiteX+radio && evento.pageY>limiteY+radio)
            //Solo deshabilita la paleta de colores
            if(evento.pageX>limiteX+radio || evento.pageY>limiteY+radio)
            var x = evento.pageX;
            var y = evento.pageY;
            //pincel.fillStyle = 'blue';
            pincel.beginPath();
            pincel.arc(x, y, radio, 0, 2 * 3.14);
            pincel.fill();
        }

    }

    pantalla.onmousemove = dibujarCirculo;

    function habilitarDibujar() {
        
        puedoDibujar = true;
    }

    function deshabilitarDibujar() {

        puedoDibujar = false;
    }

    function dibujarPaleta(){

        var alturaColor=50;
        var anchoColor=50;
        var xRed=0;
        var xGreen=anchoColor+xOffSet;
        var xBlue=(anchoColor*2)+ xOffSet;

        pincel.beginPath();
        pincel.fillStyle="red";
        pincel.fillRect(xRed,yOffSet,anchoColor,alturaColor);
        pincel.fill();

        pincel.beginPath();
        pincel.fillStyle="green";
        pincel.fillRect(xGreen,yOffSet,anchoColor,alturaColor);
        pincel.fill();  

        pincel.beginPath();
        pincel.fillStyle="blue";
        pincel.fillRect(xBlue,yOffSet,anchoColor,alturaColor);
        pincel.fill();
    }
    function cambioPaleta(evento){

        var x=evento.pageX;
        var y=evento.pageY;

        if(limiteX>=x && limiteY>=y){
            if(x<xOffSet+55) pincel.fillStyle="red";
            else if(x>=xOffSet+55 && x<xOffSet+105) pincel.fillStyle="green";
            else pincel.fillStyle="blue";
        }
    }

    dibujarPaleta();

    pantalla.onmousedown = habilitarDibujar;
    pantalla.onclick= cambioPaleta;
    pantalla.onmouseup = deshabilitarDibujar;


/*  var pantalla = document.querySelector('canvas');
    var pincel = pantalla.getContext('2d');

    pincel.fillStyle = 'grey';
    pincel.fillRect(0, 0, 600, 400);

    var puedoDibujar = false;

    //Variables para dibujar la paleta
    var xRojo = 0;
    var xVerde  = 50;
    var xAzul = 100;
    var yCuadrados = 0;
    var tamanhoCuadrados = 50;
    var colorActual = "blue";

    function dibujarCirculo(x,y,colorActual ) {

        if(puedoDibujar) {

            pincel.fillStyle = colorActual;
            pincel.beginPath();
            pincel.arc(x, y, 5, 0, 2 * 3.14);
            pincel.fill();

        }
    }

    //Función para dibujar cada uno de los cuadrados de la paleta
    function dibujarCuadrado(x, y, tamanho, color) {

        pincel.fillStyle = color;
        pincel.fillRect(x, y, tamanho, tamanho)
        pincel.fill();

    }

    //Función para dibujar la paleta de colores
    function dibujarPaletaColores() {

        dibujarCuadrado(xRojo, yCuadrados, tamanhoCuadrados, 'red');
        dibujarCuadrado(xVerde, yCuadrados, tamanhoCuadrados, 'green');
        dibujarCuadrado(xAzul, yCuadrados, tamanhoCuadrados, 'blue');

    }

    function habilitarDibujar() {

        puedoDibujar = true;

    }

    function deshabilitarDibujar() {

        puedoDibujar = false;

    }

    //Función para delimitar el área
    function puedeDisenharArea(xCoordenada,yCoordenada){

        if ((xCoordenada >= 0 && xCoordenada < (3*tamanhoCuadrados+5)) && 
            (yCoordenada >=0 && yCoordenada < (tamanhoCuadrados+5))) {

            return false;

        } else{

            return true;

        }

    }    

    function capturarMovimientoDelMouse(evento){

        var x = evento.pageX - pantalla.offsetLeft;
        var y = evento.pageY - pantalla.offsetTop;

        if (puedeDisenharArea(x,y)){

                dibujarCirculo(x,y,colorActual);

        }

    }

    function seleccionarColor(evento) {

        var x = evento.pageX - pantalla.offsetLeft;
        var y = evento.pageY - pantalla.offsetTop;

        //Cada condición altera el color de la variable colorActual

        //Comenzamos por la condición del eje Y que es común para todas
        if (y > yCuadrados && y < (yCuadrados + tamanhoCuadrados)) {

            if(x > xRojo && x < (xRojo + tamanhoCuadrados)) {

                colorActual = "red";
                console.log(colorActual);

            } else if (x > xVerde && x < (xVerde + tamanhoCuadrados)) {

                colorActual = "green";

            } else if(x > xAzul && x < (xAzul + tamanhoCuadrados)) {

                colorActual = "blue";

            }            


        }


    }

    pantalla.onmousemove = capturarMovimientoDelMouse;

    pantalla.onmousedown = habilitarDibujar;

    pantalla.onmouseup = deshabilitarDibujar;

    dibujarPaletaColores();

    pantalla.onclick = seleccionarColor;
*/