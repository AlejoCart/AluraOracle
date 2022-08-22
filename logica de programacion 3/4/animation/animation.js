    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");        
    pincel.fillStyle = "lightgrey";
    pincel.fillRect(0,0,600,400); 

    function disenharCircunferencia(x,y,radio){
        pincel.fillStyle = "blue";
        pincel.beginPath();
        pincel.arc(x,y,radio,0,2*Math.PI);
        pincel.fill();
    }    

    function limpiarPantalla(){

        pincel.clearRect(0,0,600,400);

    }

    var x = 0
    var sentido=true;
    function actualizarPantalla(){
        limpiarPantalla();
        disenharCircunferencia(x,20,10);

        if(sentido){
        x++;
            if(x>600) sentido=false;   
        }
        else{
            x--;
            if(x<0) sentido=true;
        }
    }

    setInterval(actualizarPantalla,0.01);

    /*
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");        
    pincel.fillStyle = "lightgrey";
    pincel.fillRect(0,0,600,400); 

    function disenharCircunferencia(x,y,radio){
        pincel.fillStyle = "blue";
        pincel.beginPath();
        pincel.arc(x,y,radio,0,2*Math.PI);
        pincel.fill();
    }    

    function limpiarPantalla(){

        pincel.clearRect(0,0,600,400);

    }

    var x = 0
    var sentido = 1;

    function actualizarPantalla(){

        limpiarPantalla();
        if(x > 600){
            sentido = -1;
        }else if(x < 0){
            sentido = 1;
        }

        disenharCircunferencia(x,20,10);
        x = x + sentido;
    }

    setInterval(actualizarPantalla,100); */