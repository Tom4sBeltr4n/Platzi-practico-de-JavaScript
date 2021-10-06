// Fecha de creación: 6 de octubre de 2021
// Objetivo: ser capaz de crear una

/// Cuadrado. Usaremos este par de funciones para conectar con HTML en la clase 8
var inpCua = document.getElementById("Lado");
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
function perTri(ladTri1, ladTri2, ladTri3)
{
    return ladTri1+ladTri2+ladTri3;
};

function áreTri(ladTri1,ladTri2,ladTri3)
{
    var vperTri=perTri(ladTri1, ladTri2, ladTri3);
    var semPerTri=vperTri/2;
    return Math.sqrt(semPerTri*(semPerTri-ladTri1)*(semPerTri-ladTri2)*(semPerTri-ladTri3)).toFixed(2);
};

/// Círculo
var pi = Math.PI;

function perCír(radCír)
{
    const diáCír = radCír * 2;
    return diáCír*pi;
};
function areCír(radCír)
{
    return (radCír*pi)
};