// Taller de salarios
/* Datos de distintos países separados.
Formato de cada persona: objeto
Buscamos: Total, promedio, mediana, y el 10% superior*/

//Mismo array pero con sólo salarios
const salariosCol = Colombia.map
(
    function(individuo)
    {
        return individuo.salary;
    }
);

//Función calculando la mediana
function calMed(lista)
{
    lista.sort(function(a,b){return a-b});
    if(lista.length%2==0)
    {
        const index = (lista.length)/2;
        const resultado = (lista[index]+lista[index-1])/2;
        return resultado;
    } 
    else {
        const resultado = lista[((lista.length)/2)-0.5];
        return resultado;
    }
};

const medianaGeneralCol = calMed(salariosCol);


//Clase 21: top 10%
//// Promedio del top 10%
function calPro(lista)
{
    const sumaLista = lista.reduce
    (
        function (valorAcumulado=0, nuevoElemento) //if empty, valorAcumulado defs to 0
        {
            return valorAcumulado + nuevoElemento;
        }
    )
    const proLista = sumaLista/lista.length;

    return proLista.toFixed(2);
}
const salariosOrdenados = salariosCol.sort(function(a,b){return a-b});
const spliceStart = Math.floor(salariosOrdenados.length * 9 / 10);
const spliceCount = salariosOrdenados.length - spliceStart;
const salariosTop10Col = salariosOrdenados.splice(spliceStart, spliceCount);// splice basically goes through a book, takes some pages he likes and removes the cover and counter-cover of the book. :) It does include the start value
const proTop = calPro(salariosTop10Col);


// desviación estándar (clase 22)
function desEst(datos)
{
    var suma = 0;
    datos.forEach
    (
        function(element)
        {
            suma = suma + element;
        }
    );
    var proDesEst = suma/datos.length;
    var suma2 = 0;
    datos.forEach
    (
        function(element2)
        {
            var subDato = (element2-proDesEst)**2;
            suma2 = suma2+subDato;
        }
    );
    var valDesEst=Math.sqrt(suma2/datos.length);
    return valDesEst.toFixed(2);
};
var desEstSal=desEst(salariosCol);

//Promedio
var suma3 = 0;
salariosCol.forEach
(
    function(element)
    {
        suma3 = suma3 + element;
    }
);
var salPro = (suma3/salariosCol.length).toFixed(2);

//D10/D1
var pot10 = salariosCol.slice(0,2);
var salPot10 = calPro(pot10);
var desigualdad = proTop-salPot10;


var txtVrgWg = document.getElementById("avrgwg");
var txtVrgWg2 = document.getElementById("avrgwg2");
var txtMdnWg = document.getElementById("mdngwg");
var txtInqlt = document.getElementById("dcls");
var txtDesEst = document.getElementById("dsvcnstndr");
txtVrgWg.innerHTML= salPro;
txtVrgWg2.innerHTML= salPro;
txtMdnWg.innerHTML = medianaGeneralCol;
txtInqlt.innerHTML = desigualdad;
txtDesEst.innerHTML = desEstSal;