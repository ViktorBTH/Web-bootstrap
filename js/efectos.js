$(document).ready(function(){
    var contacto = $('#contacto').offset().top;

    $('#btn-contacto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto - 50
        }, 500);
    });
});