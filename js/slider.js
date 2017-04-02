var slideIndex = 1;
var selected = [false, false, false, false];

showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}
//modified by Rashmitha
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slider");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";

  if (slideIndex == 1) {
    document.getElementById("leftArrow").disabled = true;
  } else {
    document.getElementById("leftArrow").disabled = false;
  }

  if (slideIndex == x.length) {
  document.getElementById('doneButton').style.visibility = 'visible';
  document.getElementById("doneButton").disabled = true;
  document.getElementById('rightArrow').style.visibility = 'hidden';
  } else {
    document.getElementById('doneButton').style.visibility = 'hidden';
  document.getElementById('rightArrow').style.visibility = 'visible';
  }
  if (!selected[slideIndex-1]) {
    document.getElementById("rightArrow").disabled = true; 
  } else {
    document.getElementById("rightArrow").disabled = false; 
  }
}
//add by rachel
$(function(){
  var survey={"activity":"","kids":"","income":"","transportation":""};
  $(".q1").click(function(){
    survey.activity=$(this).attr("value");
    document.getElementById("rightArrow").disabled = false; 
    selected[0] = true;
   });
  
  //question2
  $(".q2").click(function(){
     survey.kids=$(this).attr("value");    
     document.getElementById("rightArrow").disabled = false; 
     selected[1] = true;
     document.getElementById("q1o1").style.backgroundColor = "black";
   });
 //  //QUESTION3
  $(".q3").click(function(){
    survey.income=$(this).attr("value");
  document.getElementById("rightArrow").disabled = false; 
  selected[2] = true;
   });

 //  //question4
  $(".q4").click(function(){
    survey.transportation=$(this).attr("value"); 
  document.getElementById("doneButton").disabled = false;
    selected[3] = true;
 });

  //add by neha 
   $(".submit").click(function(){
   console.log(survey);
   localStorage.setItem('survey', JSON.stringify(survey));
  });
  // end neha
});