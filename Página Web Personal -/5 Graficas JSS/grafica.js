google.charts.load('current', { packages: ['corechart'] });

function graficar() {
    const funcion = document.getElementById("funcion").value;
    const domMin = parseFloat(document.getElementById("domMin").value);
    const domMax = parseFloat(document.getElementById("domMax").value);
    const ranMin = parseFloat(document.getElementById("ranMin").value);
    const ranMax = parseFloat(document.getElementById("ranMax").value);

    const data = new google.visualization.DataTable();
    data.addColumn('number', 'x');
    data.addColumn('number', 'y');

    const puntos = [];
    for (let x = domMin; x <= domMax; x += 0.1) {
        let y;
        switch (funcion) {
            case 'sin':
                y = Math.sin(x);
                break;
            case 'cos':
                y = Math.cos(x);
                break;
            case 'tan':
                y = Math.tan(x);
                break;
            case 'exp':
                y = Math.exp(x);
                break;
            case 'ln':
                
                if (x > 0) {
                    y = Math.log(x);
                } else {
                    continue;
                }
                break;
        }
        if (y >= ranMin && y <= ranMax) {
            puntos.push([x, y]);
        }
    }
    data.addRows(puntos);

    const options = {
        title: 'Gráfica de la función seleccionada',
        hAxis: { title: 'x', minValue: domMin, maxValue: domMax },
        vAxis: { title: 'y', minValue: ranMin, maxValue: ranMax },
        legend: 'none'
    };

    const chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}