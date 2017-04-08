
/*Header Footer load*/
$(document).ready(function() {
    $("#header").load("/html/header.html");
    $("#footer").load("/html/footer.html");
    $("#search").load("/html/findNeighbor.html");
});

/*drop-dwon toogle */
$(document).on('click','#down',function(){
  $(this).find("#down-content").toggle();
});

/*drop down- sidebar open close*/
$(document).ready(function lfOpen() {
    document.getElementById("down-content").style.display = "block";
});

$(document).ready(function lfClose() {
    document.getElementById("down-content").style.display = "none";
});
