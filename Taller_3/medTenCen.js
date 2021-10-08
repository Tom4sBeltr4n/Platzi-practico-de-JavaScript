// function promedio()
// {
//     const inpDat1 = document.getElementById("inpDat1");
//     const dat1 = parseInt(inpDat1.value);
//     const inpDat2 = document.getElementById("inpDat2");
//     const dat2 = parseInt(inpDat2.value);
//     const ansSpa = document.getElementById("resProm");
//     let datos = []
//     datos.push(dat1);
//     datos.push(dat2);
//     var suma = 0;
//     for(var x = 0; x<datos.length;x++)
//     {
//         console.log(suma);
//         var suma = suma+datos[x];
//     };
//     let resultado = suma/datos.length;
//     console.log("Suma final: "+suma);
    

//     ansSpa.innerHTML = "El promedio es "+resultado;
// }
function calPro(lista)
{
    const sumaLista = lista.reduce
    (
        function (valorAcumulado=0, nuevoElemento) //if empty defs to 0
        {
            return valorAcumulado + nuevoElemento;
        }
    )
    const proLista = sumaLista/lista.length;

    return proLista;
}

//output reached