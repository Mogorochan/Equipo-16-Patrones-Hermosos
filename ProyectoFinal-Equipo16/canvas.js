var c = document.getElementById("proyecto");
var lienzo = c.getContext("2d");
//montañas
var monta = new Image();
monta.src = "img/montaña.png";
monta.onload = function(){
    lienzo.drawImage(monta, 0, 35, 100, 300);
    lienzo.drawImage(monta, 400, 35, 200, 300);
}
//ciudad
var img = new Image();
img.src = "img/citygreen.png";
img.onload = function(){
      lienzo.drawImage(img, 50, 40, 300, 360);
}
//parque
var arboles = new Image();
arboles.src = "img/arboleda.png";
arboles.onload = function(){
      lienzo.drawImage(arboles, 345, 230, 100, 100);
      lienzo.drawImage(arboles, 390, 230, 100, 100);
      lienzo.drawImage(arboles, 480, 230, 100, 100);
}
   //Nubes
function nubecita(lienzo,xc,yc){
    lienzo.beginPath();
    lienzo.fillStyle = "white";
    lienzo.arc(xc-20,yc,10,0,Math.PI*2,false); // Dibuja el circulo en sentido horario
    lienzo.arc(xc-10,yc-15,15,0,Math.PI*2,false);
    lienzo.arc(xc,yc+5,15,0,Math.PI*2,false);
    lienzo.arc(xc+10,yc,15,0,Math.PI*2,false);
    lienzo.strokeStyle = "black";
    lienzo.stroke();
    lienzo.closePath;
    lienzo.fill();

}
nubecita(lienzo,80,50);
nubecita(lienzo,300,80);
nubecita(lienzo,100,100);
nubecita(lienzo,280,20);
nubecita(lienzo,400,20);
//Parque
lienzo.fillStyle = "#5B8A72"; 
lienzo.fillRect(0, 310, 600, 100);
 //Vereda
lienzo.fillStyle = "#F4F9F9";  
lienzo.fillRect(0,360,1400,30);
var cera =0;
for(cera = 0; cera<1450;){
    lienzo.strokeRect(cera,360,10,30);
    cera = cera + 10;
  }
//Molino
var molino = new Image();
molino.src = "img/molinoViento.png";
molino.onload = function(){
      lienzo.drawImage(molino, 0, 240, 80, 140);
}
//calle
lienzo.fillStyle = "black"; 
lienzo.fillRect(0, 390, 1400, 120);
var lineas = 0;
for(lineas=0; lineas< 1450;){
    
      lienzo.clearRect(lineas, 450, 10, 10);
      lineas = lineas + 20;   
}
//cesped
lienzo.fillStyle = "#5B8A72"; 
lienzo.fillRect(0, 500, 600, 20);
//río
var grd = lienzo.createLinearGradient(0, 0, 800, 0);
grd.addColorStop(0, "#A4EBF3");
grd.addColorStop(1, "white");
lienzo.fillStyle = grd;  
lienzo.fillRect(0,510,1400,100);




 
      
