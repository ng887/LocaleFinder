var crimeRecords = [
    { area: 'Queen Anne',          data: '2,448',  },
    { area: 'Capitol Hill',        data: '2,567',  },
    { area: 'Belltown',            data: '3,298',  },
    { area: 'Fremont',             data: '3,292',  },
    { area: 'Downtown',            data: '3,749',  },
    { area: 'South Lake Union',    data: '3,903',  },
    { area: 'University District', data: '7,153',  },
];
localStorage.setItem('crimeRecords', JSON.stringify(crimeRecords));
var schoolRating = [
  { area: 'University District',          data: '10',  },
  { area: 'Downtown',                     data: '8',  },
  { area: 'South Lake Union',             data: '7',  },
  { area: 'Fremont',                      data: '6',  },
  { area: 'Capitol Hill',                 data: '5',  },
  { area: 'South Lake Union',             data: '4',  },
  { area: 'Queen Anne',                   data: '3',  },
];
localStorage.setItem('schoolRating', JSON.stringify(schoolRating));
var transportation = [
  { area: 'Downtown',            data: '10',  },
  { area: 'Capitol Hill',        data: '8',  },
  { area: 'Belltown',            data: '7',  },
  { area: 'Fremont',             data: '6',  },
  { area: 'Queen Anne',          data: '5',  },
  { area: 'South Lake Union',    data: '4',  },
  { area: 'University District', data: '3',  },
];
localStorage.setItem('transportation', JSON.stringify(transportation));
var housePrice = [
  { area: 'Downtown',            data: '200',  },
  { area: 'Capitol Hill',        data: '300',  },
  { area: 'Belltown',            data: '400',  },
  { area: 'Fremont',             data: '700',  },
  { area: 'Queen Anne',          data: '800',  },
  { area: 'South Lake Union',    data: '900',  },
];
localStorage.setItem('housePrice', JSON.stringify(housePrice));
var activity = [
  {sport : 'Hiking',  place :[{area:'Queen Anne',
                               data: {number:'4',
                                      detail:['hiking park1','hiking park2','hiking park3','hiking park4']
                                     }
                               },
                             {area:'Capitol Hill',data:{number:'3',detail:['hiking park1','hiking park2','hiking park3']}},
                             {area:'Fremont',data: {number:'2',detail:['hiking park1','hiking park2']}}
                            ]
  },
  {sport : 'Swimming',  place :[{area:'Queen Anne',data:{number:'4',detail:['hiking park1','hiking park2','hiking park3']}},
                             {area:'Capitol Hill',data:{number:'3',detail:['hiking park1','hiking park2','hiking park3']}},
                             {area:'Fremont',data:{number:'2',detail:['hiking park1','hiking park2','hiking park3']}}
                            ]
  },
  {sport : 'Travelling',  place :[{area:'Queen Anne',data:{number:'4',detail:['hiking park1','hiking park2','hiking park3']}},
                             {area:'Capitol Hill',data:{number:'3',detail:['hiking park1','hiking park2','hiking park3']}},
                             {area:'Fremont',data:{number:'2',detail:['hiking park1','hiking park2','hiking park3']}}
                            ]
  }
];
localStorage.setItem('activity', JSON.stringify(activity));
