     var pantalla = document.querySelector("canvas");
     var pincel = pantalla.getContext("2d");

     pincel.fillStyle="darkgreen";//cabeza
     pincel.fillRect(125,50,350,300);
     pincel.fillStyle="black";
     pincel.fillRect(175,110,90,90);//ojoDerecho
     pincel.fillRect(335,110,90,90);//ojo Izquierdo
     pincel.fillRect(265,200,70,100);//boca0
     pincel.fillRect(225,240,40,110);//boca1
     pincel.fillRect(335,240,40,110);//boca2
