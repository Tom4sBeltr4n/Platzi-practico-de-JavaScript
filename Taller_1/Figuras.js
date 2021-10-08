// Fecha de creación: 6 de octubre de 2021
// Objetivo: ser capaz de crear una

/// Cuadrado. Usaremos este par de funciones para conectar con HTML en la clase 8
var inpCua = document.getElementById("ladCua");
var valLadCua = inpCua.value;

function perCua()
{
    let texResPerCua=document.getElementById("valPerCua");
    texResPerCua.innerHTML=(valLadCua*4);
};
function áreCua ()
{
    let texResÁreCua=document.getElementById("valÁreCua");
    texResÁreCua.innerHTML=(valLadCua**2);
};

/// Triángulo
// var inpTri1 = document.getElementById("ladTri1");
// var valLadTri1 = parseInt(inpTri1.value);
// var inpTri2 = document.getElementById("ladTri2");
// var valLadTri2 = parseInt(inpTri2.value);
// var inpTri3 = document.getElementById("ladTri3");
// var valLadTri3 = parseInt(inpTri3.value);

function altTri()
{
    var inpTri1 = document.getElementById("ladTri1");
    var valLadTri1 = parseInt(inpTri1.value);
    var inpTri2 = document.getElementById("ladTri2");
    var valLadTri2 = parseInt(inpTri2.value);
    var inpTri3 = document.getElementById("ladTri3");
    var valLadTri3 = parseInt(inpTri3.value);
    console.log("Lado 1: "+valLadTri1+"\n Lado 2: "+valLadTri2+"\n Lado 3: "+valLadTri3)
    if(valLadTri1!=valLadTri2 && valLadTri3!=valLadTri1 && valLadTri3!=valLadTri2)//Descartando triángulos escalenos
    {
        alert("Este triángulo no es isósceles, es escaleno")
    } else if(valLadTri1==valLadTri2 && valLadTri2==valLadTri3 && valLadTri1 == valLadTri3)//Descartando triángulos equiláteros
    {
        alert("Este triángulo es equilátero, no operaré con él")
    } else
    {
        let lados = [];
        lados.push(valLadTri1);
        lados.push(valLadTri2);
        lados.push(valLadTri3);
        lados.sort(function(a,b){return a-b});
        let texResAltTri=document.getElementById("valAltTri");
        if(lados[0]==lados[1])
        {
            var altura = (Math.sqrt((lados[1]**2)-(((lados[2])/2)**2))).toFixed(2);
        }else
        {
            var altura = (Math.sqrt((lados[0]**2)-(((lados[1])/2)**2))).toFixed(2);
        }
        texResAltTri.innerHTML=altura;
    }
}