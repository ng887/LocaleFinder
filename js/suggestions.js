
//add by Neha
var retrievedObject = localStorage.getItem('survey');
var survey = JSON.parse(retrievedObject);

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

