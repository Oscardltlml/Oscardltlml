function KT() {
    let ancho = parseFloat(document.querySelector('#ancho').value);
    let e = parseFloat(document.querySelector('#edge').value);
    let D = parseFloat(document.querySelector('#dia').value);
    let c = ancho - e;    
    let C0 = 2.9969 - 0.0090 *(e/c) + 0.01338 * Math.pow(e/c,2);
    let C1 = 0.0609 + 0.2590 *(e/c) - 0.2649 * Math.pow(e/c,2);
    let C2 = 0.1391 + 0.1804 *(e/c) + 0.1538 * Math.pow(e/c,2);
    let C3 = 0.5103 + 0.7518 *(e/c) - 0.4977 * Math.pow(e/c,2);
    KTG = C0 + C1 / (e/D) + C2 / Math.pow(e/D,2) + C3 / Math.pow(e/D,3)

    document.querySelector('#e_c').value = (e/c).toFixed(2);
    document.querySelector('#e_d').value = (e/D).toFixed(2);
    drawBackgroundColor();
    if(e/D <= 1){
        document.querySelector("#KTG").value = "e/D ⩽ 1";
    } else if (e>=c) {
        document.querySelector("#KTG").value = "e ⩾ c";    
    } else {
        document.querySelector("#KTG").value = KTG.toFixed(2);    
    }     
    
}

