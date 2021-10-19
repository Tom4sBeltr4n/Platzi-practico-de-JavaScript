// Taller de salarios
/* Datos de distintos países separados.
Formato de cada persona: objeto
Buscamos: Total, promedio, mediana, y el 10% superior*/
const Colombia = [];
Colombia.push({name:"Juanita Méndez", "salary": 2857.14});
Colombia.push({name:"Natalia Páez", salary: 1426.57});
Colombia.push({name:"Camilo Barajas", salary: 285.71});
Colombia.push({name:"José Sierra", salary: 2142.86});
Colombia.push({name:"Felipe Morales", salary: 1400.14});
Colombia.push({name:"Catalina Rojas", salary: 1700.57});
Colombia.push({name:"Mario Hernández", salary: 1474.48});
Colombia.push({name:"Diana Torres", salary: 1800.86});
Colombia.push({name:"Carlos Gutiérrez", salary: 828.93});
Colombia.push({name:"Daniel López", salary: 2679.57});
Colombia.push({name:"Clara Jiménez", salary: 1477.80});
Colombia.push({name:"Jennifer Meléndez", salary: 2142.86});
Colombia.push({name:"Arturo Carrera", salary: 2629.91});
Colombia.push({name:"Alfonso Ordóñez", salary: 2188.41});
Colombia.push({name:"Amanda Rodríguez", salary: 1833.19});
Colombia.push({name:"John Espitia", salary: 947.29});
Colombia.push({name:"Laura Domínguez", salary: 2798.81});
Colombia.push({name:"Gabriela Aranguren", salary: 429.08});
Colombia.push({name:"Rodolfo Arciniegas", salary: 1601.13});
Colombia.push({name:"Augusto Londoño", salary: 711.62});

const salariosCol = Colombia.map
(
    function(individuo)
    {
        return individuo.salary;
    }
);

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

console.log(calMed(salariosCol))