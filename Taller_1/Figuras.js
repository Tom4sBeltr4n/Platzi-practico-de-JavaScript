// Fecha de creación: 6 de octubre de 2021
// Objetivo: ser capaz de crear una

/// Cuadrado
function perCua(ladCua)
{
    return ladCua *4
};
function áreCua (ladCua)
{
    return ladCua**2
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