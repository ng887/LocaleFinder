$(document).ready(function() {

    $('.lf-not-like').click(function()
    {
        $('.popupNotLike').css( "right", "30px" );     
    });

    $('.close').click(function()
    {
        $('.popupNotLike').hide();
    });

});
