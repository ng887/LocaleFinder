$(document).ready(function() {

    $('.lf-like').click(function(){
        $('.popup').css( "left", "30px" )  ;     
    });

    $('.close').click(function(){
        /*$('.popup').hide(); */
        $('.popup').css( "left", "-380px" )  ; 
    });

});
