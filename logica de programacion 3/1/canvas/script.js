	var pantalla = document.querySelector("canvas");
     var pincel = pantalla.getContext("2d");

     pincel.fillStyle="green";
     pincel.fillRect(0,0,300,250);
     pincel.fillStyle="red";
     pincel.fillRect(0,300,200,100)
     pincel.fillStyle="blue";
     pincel.fillRect(200,275,100,100);

     pincel.beginPath();
     pincel.fillStyle="yellow";
     pincel.moveTo(150,125);
     pincel.lineTo(0,175);
     pincel.lineTo(300,20);
     pincel.fill();

     pincel.beginPath();
     pincel.fillStyle="black";
     pincel.arc(150,125,15,0,2*3.14);
     pincel.fill();
