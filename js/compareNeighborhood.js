$(function(){
  var imageMapping ={'University District':'../image/ud.jpg',
    'Queen Anne':           '../image/queenanne.jpg',
    'South lake Union':     '../image/slu.jpg',
    'Ballard':              '../image/ballard.jpg',
    'Fremont':              '../image/fremont.jpg',
    'Downtown':             '../image/downtown.jpg',
    'Capitol Hill':         '../image/capitolhill.jpg',
    'NorthGate':            '../image/northgate.jpg',
    'Alki':                 '../image/alki.jpg'};
    $("#leftInput").change(function(){
      console.log($(this).val());
      var leftInput = $(this).val();
      $("#leftImg").attr('src',imageMapping[leftInput]);
    });
    $("#rightInput").change(function(){
      console.log($(this).val());
      var rightInput = $(this).val();
      $("#rightImg").attr('src',imageMapping[rightInput]);
    });

});
