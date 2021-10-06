// Fecha de creación: 6 de octubre de 2021
// Objetivo: ser capaz de crear una

/// Cuadrado
const ladCua = 5;
const perCua = 4 * ladCua;
const áreCua = ladCua**2;
console.log("El lado del cuadrado son " + ladCua + " centímetros, por lo que su perímetro son " + perCua + " centímetros y su área es " + áreCua + " centímetros cuadrados.");

/// Triángulo
console.group("Triángulo");
const ladTri1 = 6;
const ladTri2 = 7;
const ladTri3 = 5;
console.log("Los lados del triángulo miden: " + ladTri1 + ", " + ladTri2 + " y " + ladTri3 + " centímetros")
const perTri = ladTri3 + ladTri2 + ladTri1;
console.log("El perímetro del triángulo es " + perTri);
const semPerTri = perTri/2;
const áreTri = Math.sqrt(semPerTri*(semPerTri-ladTri1)*(semPerTri-ladTri2)*(semPerTri-ladTri3));
console.log("El área del triángulo es aproximadamente " + Math.floor(áreTri));
console.groupEnd();
/// Círculo
console.group("Círculo");
const radCír = 4;
const diáCír = radCír * 2;
const pi = Math.PI;
const perCír = diáCír*pi;
const areCír = (radCír**2)*pi;
console.log("El radio del círculo es de " + radCír + " centímetros, su diámetro de " + diáCír + " centímetros");
console.log("El perímetro del círculo es de apróximadamente " + perCír.toFixed(2) + " centímetros, y su área de apróximadamente " + areCír.toFixed(2) + " centímetros cuadrados");
console.groupEnd();
console.log(Math)