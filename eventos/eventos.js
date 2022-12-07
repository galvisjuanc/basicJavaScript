var texto = document.getElementById("texto_lineas");
var botton1 = document.getElementById("boton")

botton1.addEventListener("click",dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick(){
    var x = parseInt(texto.value);

    var lineas = x;
    var l = 0;
    var yi, xf;
    var espacio = ancho / lineas;
    
    /* while (l < lineas){
        yi = 10 * l;
        xf = 10 * (l + 1);
        dibujarLinea("#AAF", 0, yi , xf, 300);
        console.log("linea "+ l);
        l++;
    } */
    
    for(l = 0; l < lineas; l++){
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea("#AAF", 0, yi , xf, 300);
    }
    
    dibujarLinea("black", 0, 0, 0, 300);
    dibujarLinea("black", 0, 0, 300, 0);
    dibujarLinea("black", 300, 0, 300, 300);
    dibujarLinea("black", 0, 300, 300, 300);

}