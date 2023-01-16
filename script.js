document.querySelector(".addParam").addEventListener("click",addParam);
document.querySelector(".showResults").addEventListener("click",showResults);

var parametros = [];
var valores = [];
var delta = [];

function addParam(){
    let html = document.querySelector(".container").innerHTML;
    let newHTML = '<div><input type="text" class="parametro" placeholder="Minutos"><input type="number" class="valor" placeholder="Graus"><input type="number" class="delta" placeholder="Delta"></div>';
    document.querySelector(".container").innerHTML = html + newHTML;
}

function showResults(){
    for (var i = 0; i < document.querySelectorAll('.parametro').length ; i++) {
        parametros.push(document.querySelectorAll('.parametro')[i].value);
        valores.push(parseInt(document.querySelectorAll(".valor")[i].value));
        
    }
    var trace_1 = {
        x: parametros,
        y: valores,
        type: 'lines'
    };
    
    var data = [trace_1];

    Plotly.newPlot("grafico", data);
};
