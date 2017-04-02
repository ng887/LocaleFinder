
/*Header Footer load*/
$(document).ready(function() {
    $("#header").load("/html/header.html");
    $("#footer").load("/html/footer.html");
});

/*drop-dwon toogle */
$(document).on('click','#down',function(){
  $(this).find("#down-content").toggle();
});
