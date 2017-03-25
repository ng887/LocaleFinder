var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slider");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
//add by rachel
$(function(){
  var survey={"activity":"","kids":"","income":"","transportation":""};
  $(".q1").click(function(){
    survey.activity=$(this).attr("value");
   });
  
  //question2
  $(".q2").click(function(){
     survey.kids=$(this).attr("value");     
   });
 //  //QUESTION3
  $(".q3").click(function(){
    survey.income=$(this).attr("value");
   });

 //  //question4
  $(".q4").click(function(){
    survey.transportation=$(this).attr("value"); 
 });

  //add by neha 
   $(".submit").click(function(){
   console.log(survey);
   localStorage.setItem('survey', JSON.stringify(survey));
  });
  // end neha
});
//end rachel


