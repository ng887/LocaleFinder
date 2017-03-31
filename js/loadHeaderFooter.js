/*
$(document).ready(function(){ 
  $.get("footer.html", function(data) {
    $("#footer").html(data);
  });
});
*/


$(document).ready(function() {
    $("#header").load("./header.html");
    $("#footer").load("./footer.html");
});

$(document).ready(function() {
    $("#header").load("./html/header.html");
    $("#footer").load("./html/footer.html");
});

 /*$("#down").click(function(event) {
	event.preventDefault();
    $(this).find("#down-content").toggle();
});*/

$(document).on('click','#down',function(){
	$(this).find("#down-content").toggle();
});

/*
$(document).ready(function() {
	$('#footer').load('footer.html');
});*/

