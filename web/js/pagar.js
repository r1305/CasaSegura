$("#response-panel").hide();
Culqi.publicKey="pk_test_jQDg17Ot1ZkfJtrz";
Culqi.init();
$("#btn_pagar").on('click',function(e){
    Culqi.createToken();
    e.preventDefault();
});

function culqi(){
    if(Culqi.token){
        $(document).ajaxStart(function(){
            run_waitme();
        });
        //imprimir token
        console.log(Culqi.token.id);
        alert('¡EL TOKEN HA SIDO CREADO!\n'+Culqi.token.id);
        $("#culqi").modal('hide');
        location.href="activacion.html";
//        $.ajax({
//            type:'POST',
//            url:'RUTA BACKEND',
//            data:{token:Culqi.token.id},
//            datatype:'json',
//            success:function(data){
//              var result="";
//              if(data.constructor==String){
//                  result=JSON.parse(data);
//              }
//              if(data.constructor==Object){
//                  result=JSON.parse(JSON.stringify(data));
//              }
//              if(result.object=='charge'){
//                  resultdiv(result.outcome.user_message);
//              }
//              if(result.object=='error'){
//                  resultdiv(result.user_message);
//              }
//            },
//            error:function(error){
//                resultdiv(error)
//            }
//        });
    }else{
        $('#response-panel').show();
        $('#response').html(Culqi.error.merchant_message);
        $('#body').waitme('hide');
    }
};

function run_waitme(){
//    $('body').waitme({
//        effect:'orbit',
//        text:'Procesando pago...',
//        bg:'rgba(255,255,255,0.7',
//        color:'#28d2c8'
//    });
console.log("waiting");
}

function resultdiv(message){
    $('#response-panel').show();
    $('#response').html(message);
    //$('body').waitme('hide');
}

