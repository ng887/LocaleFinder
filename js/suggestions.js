
//add by Neha
var retrievedObject = localStorage.getItem('survey');
var survey = JSON.parse(retrievedObject);
//add by rachel
//each element is in this format:{"area":"","score":"","detail":{"crime":"","school":"","transportation":"","housePrice":""}}
var suggestionList = [];
//question kids mapping
var suggestedNeighboors;
if (survey.kids === "YES") {
  suggestedNeighboors = getNeighboorByCrime();
   //set the score to the crime less Areas
   setScoreToNeighboors(suggestedNeighboors,credit.crime,criteria.crime);
   //set the score to the area with highest school rating
   suggestedNeighboors  = getNeighboorBySchool();
   setScoreToNeighboors(suggestedNeighboors,credit.school,criteria.school);
   console.log(suggestionList);
}
//queation income range mapping
//filter three area with lowest average housing price that over the "housePrice"
var housePrice = incomeHousePriceMapping[survey.income];
suggestedNeighboors = getNeighboorByIncome(housePrice);
setScoreToNeighboors(suggestedNeighboors,credit.housePrice,criteria.housePrice);

//question public transportation mapping
if(survey.transportation === "DAILY" || survey.transportation === "FEW DAYS IN A WEEK"){
     suggestedNeighboors = getNeighboorByTransporation();
     setScoreToNeighboors(suggestedNeighboors,credit.transportation,criteria.transportation);
}
//this function to form the suggesting list according to filtered neighboorhood, credit and criteria
function setScoreToNeighboors(suggestedNeighboors,credit,criteria){
    var modified = false;
    for(var n in suggestedNeighboors){
      var i = 0;
      for(i = 0;i<suggestionList.length;i++){
          if(suggestionList[i].area == suggestedNeighboors[n].area){
            var origScore = parseInt(suggestionList[i].score);
            suggestionList[i].score = origScore + parseInt(credit)
            if(typeof suggestionList[i].detail == "undefined")
                  suggestionList[i].detail = {};
            suggestionList[i].detail[criteria] = suggestedNeighboors[n].data;
            modified = true;
          }
      }
      if(!modified){
          suggestionList[i] = {};
          suggestionList[i].area = suggestedNeighboors[n].area;
          suggestionList[i].score = credit;
          if(typeof suggestionList[i].detail == "undefined")
               suggestionList[i].detail = {};
          suggestionList[i].detail[criteria] = suggestedNeighboors[n].data;
      }else modified = false;
    }
}
function getNeighboorByTransporation(){
  var transportation = localStorage.getItem("transportation");
  var transportationObj = JSON.parse(transportation);
  var neightboors = [transportationObj[0],transportationObj[1],transportationObj[2]];
  return neightboors;
}
//get top three neighboors according to income
function getNeighboorByIncome(minHousePrice){
     var housePrice = localStorage.getItem("housePrice");
     var housePriceObj = JSON.parse(housePrice);
     var neighboors= [];
     for(var n in housePriceObj){
          if(housePriceObj[n].data >= minHousePrice){
            neighboors[0] = housePriceObj[n];
            n++;
            if(n< housePriceObj.length) neighboors[1] = housePriceObj[n];
            n++;
            if(n< housePriceObj.length) neighboors[2] = housePriceObj[n];
            break;
          }
     }
     return neighboors;
}
//get top three highest rating school area
function getNeighboorBySchool(){
     var schoolRating = localStorage.getItem("schoolRating");
     var schoolRatingObj = JSON.parse(schoolRating);
     var neightboors = [schoolRatingObj[0],schoolRatingObj[1],schoolRatingObj[2]];
     return neightboors;
}
//get top three least crime area
function getNeighboorByCrime(){
  //{ area: 'Queen Anne',          crimeCount: '2,448',  },
   var crimeRecords = localStorage.getItem("crimeRecords");
   var crimeRecordsObj = JSON.parse(crimeRecords);
   var neighboors = [crimeRecordsObj[0],crimeRecordsObj[1],crimeRecordsObj[2]];
   return neighboors;
}
//end by rachel
if (survey.kids === "YES") {
    console.log("Suggest Safe Areas");
    var safeAreas = getTop3CrimeRecords();

    safeAreas.forEach(function(safeArea, i) {
        $('#suggestedArea').append('<div id="area' + i + '"></div>');
       
        //areaName
        $('#area' + i).append('<h2>' + safeArea.area + '</h2>');

        //addClass
        $('#area' + i).addClass('area');

        //crime
        $('#area' + i).append('<div id="crime"></div>');
        $('#area' + i).find('div#crime').append('<h4 class="suggestions">No. of crimes(per 100K): ' + safeArea.crimeCount + '</h4>');

        //schools
        $('#area' + i).append('<div id="schools"></div>');
        $('#area' + i).find('div#schools').append('<h4 class="suggestions">Schools: ' +  + '</h4>');

         //grocery
        $('#area' + i).append('<div id="grocery"></div>');
        $('#area' + i).find('div#grocery').append('<h4 class="suggestions">Grocery: ' + + '</h4>');

        //transport
        $('#area' + i).append('<div id="transport"></div>');
        $('#area' + i).find('div#transport').append('<h4 class="suggestions">Transport: ' +  + '</h4>');
       
        //income
        $('#area' + i).append('<div id="income"></div>');
        $('#area' + i).find('div#income').append('<h4 class="suggestions">Income: ' + + '</h4>');
       

    });
}

function getCrimeDetails() {
    var crimeRecords = [
        { crimeCount: '3,298', area: 'Belltown' },
        { crimeCount: '2,567', area: 'Capitol Hill' },
        { crimeCount: '3,903', area: 'South Lake Union' },
        { crimeCount: '3,749', area: 'Downtown' },
        { crimeCount: '7,153', area: 'University District' },
        { crimeCount: '2,448', area: 'Queen Anne' },
        { crimeCount: '3,292', area: 'Fremont' }
    ];
    return crimeRecords;
}

function getSortedCrimeRecords() {
    var SortedCrimeRecords = getCrimeDetails();
    SortedCrimeRecords.sort(function(a, b) {
        return (a.crimeCount > b.crimeCount) ? 1 : ((b.crimeCount > a.crimeCount) ? -1 : 0)
    });
    console.log(SortedCrimeRecords);
    return SortedCrimeRecords;
}

function getTop3CrimeRecords() {
    var top3CrimeRecords = getSortedCrimeRecords();
    top3CrimeRecords = top3CrimeRecords.slice(0, 3);
    console.log(top3CrimeRecords);
    return top3CrimeRecords
}
//end Neha

