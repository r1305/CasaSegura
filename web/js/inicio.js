var contador = 0;
$(function () {

    $("#sumar").on('click', function () {
        contador = contador + 1;
        printCounter(contador)
        enableButton(contador);
    });

    $("#restar").on('click', function () {
        if (contador > 0) {
            contador = contador - 1;
            printCounter(contador);
            enableButton(contador);
        }
    });

    $("#monto_asegurado").on('change', function () {
        enableButton(contador);
    });

    var ckbox = $('#terminos');

    $('#terminos').on('click',function () {
        if (ckbox.is(':checked')) {
            $("#pagar").removeAttr("disabled");
        } else {
            $("#pagar").attr("disabled",true);
        }
    });
});

function printCounter(n) {
    if (n == 1) {
        $("#contador_dias").text(n + " dia");
    } else {
        $("#contador_dias").text(n + " dias");
    }
}

function enableButton(n) {
    var select = $("#monto_asegurado").val();
    if (n > 0 && select !== "0") {
        $("#btn_active_service").removeAttr('disabled');
    } else {
        $("#btn_active_service").attr('disabled');
    }
}



