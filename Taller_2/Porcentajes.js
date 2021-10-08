function calDes()
{
    const inpPri = document.getElementById("inpPri");
    const preOri = inpPri.value;
    const inpDes = document.getElementById("inpDes");
    const des = inpDes.value;
    const resSpa = document.getElementById("preFin");
    resSpa.innerHTML = "El precio con descuento es de " + (preOri*(1-(des/100))).toFixed(2) + " dólares";
};