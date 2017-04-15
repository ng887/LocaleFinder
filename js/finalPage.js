/*$(document).ready(function() 
{
	var name = document.getElementById('choice1')
	document.getElementById('neighborhoodName').innerHTML = name
}); */

/*$( "#choice1" ).click(function() 
{
  var name = document.getElementById('choice1')
	document.getElementById('neighborhoodName').innerHTML = name
}); */
$(document).ready(function()
{
	document.getElementById("neighborhoodName").innerHTML = localStorage.getItem('finalSelection') 

/*$("#choice1").click(function()
    {
      var name = document.getElementById('choice1')
		document.getElementById('neighborhoodName').innerHTML = name
    }); */
});