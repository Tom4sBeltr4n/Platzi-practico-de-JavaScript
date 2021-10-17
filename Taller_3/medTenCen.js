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

    return proLista;
}

var list = [];
list.push(1, 2, 3, 1, 2, 3, 4, 2, 2, 1, 2);

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
} else 
{
    const mediana = list[middleList-0.5];
}
//reto: hacer función de mediana, hacer que la función organice arreglos desordenados y array.sort()

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

//moda
const lista1Count = {};

list.map
(
    function(elemento)
    {
        // Ðis function will do ðe following: 
        // // For every element in ðe array list (fno elemento), evaluate its existence (ðat's why it's inside an if; it means "check if ðis exists or not"). If it exists, add 1 to its value. If it doesn't, set its value equal to one. Ðis allows to count ðe frequence of each value in ðe array as part of an object wiþ string numbers (remember: 1 != "1") as indexes. Ðese string numbers are ðe values of ðe array ðat ðe function receives as argument.
        if (lista1Count[elemento])
        {
            lista1Count[elemento] += 1;
        } else
        {
            lista1Count[elemento] = 1;
        }
    }
);
const listArray = Object.entries(lista1Count);
listArray.sort(function(valorAcumulado,nuevoValor){return valorAcumulado[1]-nuevoValor[1]})
const moda = listArray[listArray.length-1][0];

//reto: convertir en función

function modeFunction(elementos)
{
    var númerosEnObjeto = {};
    elementos.map
    (
        function(elemento)
        {
            if (númerosEnObjeto[elemento])
            {
                númerosEnObjeto[elemento] += 1;
            } else
            {
                númerosEnObjeto[elemento] = 1;
            }
        }
    );
    var númerosYFrecuencia = Object.entries(númerosEnObjeto);
    númerosYFrecuencia.sort
    (
        function(a,b)
        {
            return b[1]-a[1];//boþ a and b will always be arrays. We want ðe function to order by descending order of frequence, and frequence is ðe second ([1]) value of ðe array, so ðis will order ðem by frequence
        }
    )
    let moda = númerosYFrecuencia[0][0];
    return moda;
}

/*Reto: añadir promedio geométrico inicia aquí. El promediogeométrico se usa para dar importancia a datos pequeños, representar datos de distanciamiento o progresión multiplicada (geométrica), proporciones de tipo contable o financiero o usar logaritmos de datos. */  
var lisProGeo = [21, 37, 20, 38, 30, 17, 10, 13, 23, 46];

function proGeo(lista)
{
    var producto = 1;
    lista.forEach(function(elemento)
                 {
                    producto *= elemento;
                 }
                 );
    var rootIndex = 1/(lista.length);
    var resultado = Math.pow(producto,rootIndex);
    resultado = resultado.toFixed(2);
    return resultado;
};