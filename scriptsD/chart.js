//grafico barra 1
const ctx = document.getElementById('mychart');

const mychart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Globulos Rojos', 'Hemoglobina', 'Hematrocito', 'Vol.Glob.Medio(VGM)', 'Hem.Glob.Medio(CHCM)', 'RDW'],
        datasets: [{
            label: 'Valor',
            data: [6.12, 15.1, 44.8, 88.4, 28.9, 13.6],
            borderWidth: 1,
            borderColor: 'rgb(75,192,192)'
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

//grafico barra 2
const ctx2 = document.getElementById('mychart2');

const mychart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Glucosa', 'Colesterol Total', 'Colesterol HDL', 'Colesterol LDL', 'Colesterol VLDL', 'Trigliceridos'],
        datasets: [{
            label: 'Valor',
            data: [97.9, 182, 37, 116, 29, 187],
            borderWidth: 1,
            borderColor: 'rgb(75,192,192)'
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

//grafico Comparativo 1
const ctx3 = document.getElementById('mychart3');

const mychart3 = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['Globulos Rojos', 'Hemoglobina', 'Hematrocito', 'Vol.Glob.Medio(VGM)', 'Hem.Glob.Medio(CHCM)', 'RDW'],
        datasets: [{
            label: 'Valor Referencial',
            data: [6.0, 16, 50, 100, 34, 15],
            borderWidth: 1,
            borderColor: 'rgb(75,192,192)'
        },
        {
            label: 'Valor Paciente',
            data: [6.12, 15.1, 44.8, 88.4, 28.9, 13.6],
            borderWidth: 1,
            borderColor: 'rgb(225,99,0)',
            backgroundColor: 'rgb(225,180,0)'
        }
    ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

//grafico Comparativo 2
const ctx4 = document.getElementById('mychart4');

const mychart4 = new Chart(ctx4, {
    type: 'line',
    data: {
        labels: ['Glucosa', 'Colesterol Total', 'Colesterol HDL', 'Colesterol LDL', 'Colesterol VLDL', 'Trigliceridos'],
        datasets:[
        {
            label: 'Valor Referencial',
            data: [115, 200, 40, 130, 35, 160],
            borderWidth: 1,
            borderColor: 'rgb(75,192,192)'
        },
        {
            label: 'Valor Paciente',
            data: [97.9, 182, 37, 116, 29, 187],
            borderWidth: 1,
            borderColor: 'rgb(225,99,0)',
            backgroundColor: 'rgb(225,180,0)'
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

