var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;

/* while (l < lineas){
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarLinea("#AAF", 0, yi , xf, 300);
    console.log("linea "+ l);
    l++;
} */

for(l = 0; l < lineas; l++){
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarLinea("#AAF", 0, yi , xf, 300);
    console.log("linea "+ l);
}

dibujarLinea("black", 0, 0, 0, 300);
dibujarLinea("black", 0, 0, 300, 0);
dibujarLinea("black", 300, 0, 300, 300);
dibujarLinea("black", 0, 300, 300, 300);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
