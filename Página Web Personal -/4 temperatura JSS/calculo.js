function calculos() {
    valor = parseFloat(document.querySelector('#valor').value);
    unidad = document.querySelector('#unidad').value;

    // Convertir a todas las unidades
    switch (unidad) {
        case 'C':
            document.querySelector('#C').value = valor;
            document.querySelector('#F').value = (valor * 9/5) + 32;
            document.querySelector('#K').value = valor + 273.15;
            document.querySelector('#R').value = (valor + 273.15) * 9/5;
            break;
        case 'F':
            document.querySelector('#F').value = valor;
            document.querySelector('#C').value = (valor - 32) * 5/9;
            document.querySelector('#K').value = valor + 273.15;
            document.querySelector('#R').value = valor + 459.67;
            break;
        case 'K':
            document.querySelector('#K').value = valor;
            document.querySelector('#C').value = valor - 273.15;
            document.querySelector('#F').value = (valor * 9/5) + 32;
            document.querySelector('#R').value = valor * 9/5;
            break;
        case 'R':
            document.querySelector('#R').value = valor;
            document.querySelector('#K').value = valor * 5/9;
            document.querySelector('#C').value = valor - 273.15;
            document.querySelector('#F').value = (valor * 9/5) + 32;
            break;
    }
};