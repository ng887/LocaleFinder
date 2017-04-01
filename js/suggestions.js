
//add by Neha
var retrievedObject = localStorage.getItem('survey');
var survey = JSON.parse(retrievedObject);
//add by rachel
/* queations to cretirion mapping explaination:
1)if user have kis, give credit to top three ares with lowest crime and highest shcool rate
2)if user use public transportation daily or a fews time a week, give credit to top three areas with the most bus stop
3)user's income and house price mapping:
user's income in '10-50',  give credit to top three areas with house price above '200' in ascding order
user's income in '50-100',  give credit to top three areas with house price above '500' in ascding order
user's income in '100-150',   give credit to top three areas with house price above '800' in ascding order
user's income in '150+',  give credit to top three areas with house price above '100' in ascding order
4)user's activity mapping:
user select hiking, give credit to top three area where support hiking activity
user select swimming, give credit to top three area where support swimming activity
user select travelling, give credit to top three area where support travelling activity

At last, sort areas by credit and choose top three
*/
//each element is in this format:{"area":"","score":"","detail":{"crime":"","school":"","transportation":"","housePrice":""}}
var suggestionList = [];
//question kids mapping
var suggestedNeighbours;
if (survey.kids === "YES") {
  suggestedNeighbours = getNeighbourByCrime();
  console.log(suggestedNeighbours);
   //set the score to the crime less Areas
   setScoreToNeighbours(suggestedNeighbours,credit.crime,criteria.crime);
   //set the score to the area with highest school rating
   suggestedNeighbours  = getNeighbourBySchool();
   setScoreToNeighbours(suggestedNeighbours,credit.school,criteria.school);
}
//question income range mapping
//filter three area with lowest average housing price that over the "housePrice"
var housePrice = incomeHousePriceMapping[survey.income];
suggestedNeighbours = getNeighbourByIncome(housePrice);
setScoreToNeighbours(suggestedNeighbours,credit.housePrice,criteria.housePrice);

//question public transportation mapping
if(survey.transportation === "DAILY" || survey.transportation === "FEW DAYS IN A WEEK"){
     suggestedNeighbours = getNeighbourByTransporation();
     setScoreToNeighbours(suggestedNeighbours,credit.transportation,criteria.transportation);
}
//question activity mapping
if(survey.activity === "outdoor" || survey.activity === "movies" || survey.activity === "bar-hopping"||survey.activity === "foodie"){
     suggestedNeighbours = getNeighbourByActivity(survey.activity);
     setScoreToNeighbours(suggestedNeighbours,credit[survey.activity.toLowerCase()],criteria.supportingAct,survey.activity);
}
//sort suggesting list by credit
suggestionList.sort(function(a, b) {
    return (a.score < b.score) ? 1 : ((a.score > b.score) ? -1 : 0)
});
console.log(suggestionList);
//add by reache --03/30
var suggestedAreaDetail = [];
var areaDetail = localStorage.getItem('areaDetail');
var areaDetailObj = JSON.parse(areaDetail);
suggestionList = suggestionList.slice(0,neighborhood.top);
for(var i in suggestionList){
    for(var j in areaDetailObj){
      if(suggestionList[i].area == areaDetailObj[j].name){
        suggestedAreaDetail[i] = areaDetailObj[j];
        break;
      }
    }
}
console.log(suggestedAreaDetail);
//end --03/30
//this function to form the suggesting list according to filtered neighborhood, credit and criteria
function setScoreToNeighbours(suggestedNeighbours,credit,criteria,sport){
    var modified = false;
    for(var n in suggestedNeighbours){
      var i = 0;
      for(i = 0;i<suggestionList.length;i++){
          if(suggestionList[i].area == suggestedNeighbours[n].area){
            var origScore = parseInt(suggestionList[i].score);
            suggestionList[i].score = origScore + parseInt(credit)
            /*if(typeof suggestionList[i].detail == "undefined")
                  suggestionList[i].detail = {};
            suggestionList[i].detail[criteria] = suggestedNeighbours[n].data;
            if(typeof sport !="undefined")
                suggestionList[i].detail[criteria].sport = sport;*/
            modified = true;
          }
      }
      if(!modified){
          suggestionList[i] = {};
          suggestionList[i].area = suggestedNeighbours[n].area;
          suggestionList[i].score = credit;
          /*if(typeof suggestionList[i].detail == "undefined")
               suggestionList[i].detail = {};
          suggestionList[i].detail[criteria] = suggestedNeighbours[n].data;
          if(typeof sport !="undefined")
              suggestionList[i].detail[criteria].sport = sport;*/
      }else modified = false;
    }

}
//get top three neighbours according to activity
function getNeighbourByActivity(selectedActivity){
  var activity = localStorage.getItem("activity");
  var activityObj = JSON.parse(activity);
  var neighbours= [];
  for(var n in activityObj){
      if(activityObj[n].sport == selectedActivity){
        var places = activityObj[n].place;
        //get top three area that support that activity
        neighbours = places.slice(0,neighborhood.top);
        break;
      }
  }
  return neighbours;
}
//get top three neighbours according to bus stop number
function getNeighbourByTransporation(){
  var transportation = localStorage.getItem("transportation");
  var transportationObj = JSON.parse(transportation);
  var neighbours = transportationObj.slice(0,neighborhood.top);
  return neighbours;
}
//get top three neighbours according to income
function getNeighbourByIncome(minHousePrice){
     var housePrice = localStorage.getItem("housePrice");
     var housePriceObj = JSON.parse(housePrice);
     var neighbours= [];
     for(var n in housePriceObj){
          if(housePriceObj[n].data >= minHousePrice){
            neighbours[0] = housePriceObj[n];
            n++;
            if(n< housePriceObj.length) neighbours[1] = housePriceObj[n];
            n++;
            if(n< housePriceObj.length) neighbours[2] = housePriceObj[n];
            break;
          }
     }
     return neighbours;
}
//get top three highest rating school area
function getNeighbourBySchool(){
     var schoolRating = localStorage.getItem("schoolRating");
     var schoolRatingObj = JSON.parse(schoolRating);
    //  var neighbours = [schoolRatingObj[0],schoolRatingObj[1],schoolRatingObj[2]];
    //Start Edit by sirisha
    var neighbours = schoolRatingObj.slice(0,neighborhood.top);
    //End edited
     return neighbours;
}
//get top three least crime area
function getNeighbourByCrime(){
  //{ area: 'Queen Anne',          crimeCount: '2,448',  },
   var crimeRecords = localStorage.getItem("crimeRecords");
   var crimeRecordsObj = JSON.parse(crimeRecords);
  //  var neighbours = [crimeRecordsObj[0],crimeRecordsObj[1],crimeRecordsObj[2]];
  //Start edit by sirisha
  var neighbours = crimeRecordsObj.slice(0,neighborhood.top);
  //end edit
   return neighbours;
}
//data for bar chart
/*the data object is
dataObj = {
title:"",
ytitle:"",
detail:[
{name:"",data:""},
{name:"",data:""},
{name:"",data:""}
]
}

*/
//income display
var dataObj = {
  title:'Average Income in Three Area',
  ytitle:'Average Income',
  detail:[
    {name:suggestedAreaDetail[0].name,data:suggestedAreaDetail[0].income},
    {name:suggestedAreaDetail[1].name,data:suggestedAreaDetail[1].income},
    {name:suggestedAreaDetail[2].name,data:suggestedAreaDetail[2].income}
  ]
}
$("#incomeChartContainer").CanvasJSChart(displayBarChar(dataObj));
//house price display
dataObj = {
  title:'Average House Price in Three Area',
  ytitle:'Average House Price',
  detail:[
    {name:suggestedAreaDetail[0].name,data:suggestedAreaDetail[0].housePrice},
    {name:suggestedAreaDetail[1].name,data:suggestedAreaDetail[1].housePrice},
    {name:suggestedAreaDetail[2].name,data:suggestedAreaDetail[2].housePrice}
  ]
}
$("#housePriceChartContainer").CanvasJSChart(displayBarChar(dataObj));
function displayBarChar(dataObj){
  var options = {
		title: {
			text: dataObj.title
		},
    axisY: {
				title: dataObj.ytitle
			},
    animationEnabled: true,
		data: [
		{
			type: "column", //change it to line, area, bar, pie, etc
      indexLabel: "{y}",
			dataPoints: [
				{ label: dataObj.detail[0].name, y: parseInt(dataObj.detail[0].data) },
				{ label: dataObj.detail[1].name, y: parseInt(dataObj.detail[1].data) },
				{ label: dataObj.detail[2].name, y: parseInt(dataObj.detail[2].data) }
			]
		}
		]
	};
  return options;
}
//end by rachel
// Transportation section
// start by sirisha
$("#transportationContainer1").CanvasJSChart(displayTranDoughnutChart(suggestedAreaDetail[0]));
$("#transportationContainer2").CanvasJSChart(displayTranDoughnutChart(suggestedAreaDetail[1]));
$("#transportationContainer3").CanvasJSChart(displayTranDoughnutChart(suggestedAreaDetail[2]));
function displayTranDoughnutChart(dataObj){
  var options = {
		title:{
			text: dataObj.name
		},
    animationEnabled: true,
		data: [
		{
			type: "doughnut",
			startAngle: -90,
      indexLabelFontColor: "black",
      indexLabelFontSize: 20,
			toolTipContent: "{legendText}: {y}",
			showInLegend: true,
			dataPoints: [
				{y: parseInt(dataObj.transportation), indexLabel: "Transit score: "+dataObj.transportation, legendText: dataObj.name },
				{y: 100-parseInt(dataObj.transportation), legendText: " " }
			]
		}
		]
	};
  return options;
}
//End by sirisha

//start by neha

  //start edit by sirisha
   //Collected the suggestion list and printing the top three nieghbourhood.
    // var safeAreas = suggestionList.slice(0,neighborhood.top);

    //Showing each nieghbourhood in suggestionsPage.html
/*    safeAreas.forEach(function(safeArea, i) {
        $('#suggestedArea').append('<div id="area' + i + '"></div>');

        //Displays top 3 area/suburb name
        $('#area' + i).append('<h2>' + safeArea.area + '</h2>');

        //addClass
        $('#area' + i).addClass('area');

        //crime
        $('#area' + i).append('<div id="crime"></div>');
        $('#area' + i).find('div#crime').append('<h4 class="suggestions">No. of crimes(per 100K): ' + safeArea.detail.crime + '</h4>');

        //schools
        $('#area' + i).append('<div id="schools"></div>');
        $('#area' + i).find('div#schools').append('<h4 class="suggestions">School Rating: ' + safeArea.detail.school + '</h4>');

         //grocery
        $('#area' + i).append('<div id="grocery"></div>');
        $('#area' + i).find('div#grocery').append('<h4 class="suggestions">Grocery Stores: ' + + '</h4>');

        //transport
        $('#area' + i).append('<div id="transport"></div>');
        $('#area' + i).find('div#transport').append('<h4 class="suggestions">Transportion Rating: ' + safeArea.detail.transportation + '</h4>');

        //income
        $('#area' + i).append('<div id="income"></div>');
        $('#area' + i).find('div#income').append('<h4 class="suggestions">Avg Income Range: ' + safeArea.detail.housePrice +  '</h4>');


    });*/
//end edited by sirisha
//end by neha
