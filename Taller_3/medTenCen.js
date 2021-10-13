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

var list = [];
list.push(100, 200, 400, 500, 400000000);

const middleList = list.length/2;

function esPar(número)
{
    if(número % 2 == 0)
    {
        return true;
    } else
    {
        return false;
    }
}

if (esPar(list.length))
{
    const elemento1 = list[middleList-1];
    const elemento2 = list[middleList];
    const mediana = calPro([elemento1, elemento2]);
    console.log(mediana);
} else 
{
    const mediana = list[middleList-0.5];
    console.log(mediana);
}
//reto1: hacer función de mediana, hacer que la función organice arreglos desordenados y array.sort()
