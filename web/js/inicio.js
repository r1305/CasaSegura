var contador = 0;
$(function () {
    
    $("#sumar").on('click', function () {
        contador = contador + 1;
        printCounter(contador, $("#frecuencia").val());
        enableButton(contador);
    });

    $("#restar").on('click', function () {
        if (contador > 0) {
            contador = contador - 1;
            printCounter(contador, $("#frecuencia").val());
            enableButton(contador);
        }
    });

    $("#frecuencia").on('change', function () {
        //console.log("change frecuencia");
        //console.log($("#frecuencia").val());
        printCounter(contador, $("#frecuencia").val());
    });

    /*$("#monto_asegurado").on('change', function () {
     enableButton(contador);
     });*/

    var ckbox = $('#terminos');

    $('#terminos').on('click', function () {
        if (ckbox.is(':checked')) {
            $("#pagar").removeAttr("disabled");
        } else {
            $("#pagar").attr("disabled", true);
        }
    });

    $('#pagar').on('click', function () {
        $("#cotizacion").modal('hide');
        $("#culqi").modal('show');
    });
});

function printCounter(n, frecuencia) {
    console.log("n: ",n);
    console.log("frecuencia: ",frecuencia);
    if(frecuencia==="1"){
        if (n === 1) {
            $("#contador_dias").text(n + " semana");
            //console.log("semana");
        } else {
            $("#contador_dias").text(n + " semanas");
            //console.log("semana");
        }
    }else{
        if (n === 1) {
            $("#contador_dias").text(n + " mes");
            //console.log("mes");
        } else {
            $("#contador_dias").text(n + " meses");
            //console.log("meses");
        }
    }
}

function enableButton(n) {
    //var select = $("#monto_asegurado").val();
    if (n > 0) {
        $("#btn_active_service").removeAttr('disabled');
    } else {
        $("#btn_active_service").attr('disabled');
    }
}



