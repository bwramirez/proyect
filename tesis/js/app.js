$(document).ready(function() {
    console.log("Start...");

    document.getElementById('esal').style.display = 'none';
    $('#clc').click(function() {
        $('#esal').hide(500);
        document.getElementById('nj').setAttribute("placeholder", "Ingrese valor");
        document.getElementById('nj').removeAttribute("disabled");
    });
    $('#oc').click(function() {
        $('#esal').show(500);
        document.getElementById('nj').removeAttribute("placeholder");
        document.getElementById('nj').setAttribute("disabled", "");
    });

    document.getElementById('par-mat').style.display = 'none';

    $('#coef').click(function() {
        $('#par-mat').show(500);
        document.getElementById('m3').removeAttribute("placeholder");
        document.getElementById('m2').removeAttribute("placeholder");
        document.getElementById('m2').setAttribute("disabled", "");
        document.getElementById('m3').setAttribute("disabled", "");
    });
    $('#coef1').click(function() {
        $('#par-mat').hide(500);
        document.getElementById('m3').setAttribute("placeholder", "Ingrese valor");
        document.getElementById('m2').setAttribute("placeholder", "Ingrese valor");
        document.getElementById('m3').removeAttribute("disabled");
        document.getElementById('m2').removeAttribute("disabled");
    });

    $("#fa-plus").click(function() {
        var $clonarfila = $("#trafico").find("tbody tr:last").clone().removeClass('hide table-line');
        $("#trafico tbody").append($clonarfila);
    });

    $("#trafico").on("click", "#fa-close", function() {
        $(this).parents("tr").remove();
    });

    document.getElementById('tabla3').style.display = 'none';

    $("#fa fa-question-circle").hover(function() {
        $('#tabla3').show(250);
    });



    $("#addcap input[type=checkbox]").click(function() {
        $("#agmateriales").find("." + $(this).attr("name")).toggle();

    });

    loadGraph();


});

function loadGraph() {
    var ctx = document.getElementById("chartCable").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}