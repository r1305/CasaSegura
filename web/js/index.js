$(function () {
    $("#registro").on('click', function () {
        location.href = 'registro.html';
    });

    $("#login").on('click', function () {
        $("#loader").modal("show");
        //disable esc or click outside modal
        $('#loader').data('bs.modal').options.keyboard = false;
        $('#loader').data('bs.modal').options.backdrop = 'static';
        
        setTimeout(function(){
            location.href='inicio.html';
        },5000);
    });
});





