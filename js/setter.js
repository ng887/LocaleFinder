function setValues() 
{
	localStorage.setItem('neighborhoods1', document.getElementById('leftInput').value)
	localStorage.setItem('neighborhoods2', document.getElementById('rightInput').value)
	window.location.href = "DetailedComparePage.html";
}