var crimeRecords = [
    { area: 'Queen Anne',          data: '2,448'  },
    { area: 'Alki',                data: '2,448'  },
    { area: 'Capitol Hill',        data: '2,567'  },
    { area: 'Belltown',            data: '3,298'  },
    { area: 'Fremont',             data: '3,292'  },
    { area: 'Ballard',             data: '3,737'  },
    { area: 'Downtown',            data: '3,749'  },
    { area: 'South Lake Union',    data: '3,903'  },
    { area: 'Northgate',           data: '6,373'  },
    { area: 'University District', data: '7,153'  }
];
localStorage.setItem('crimeRecords', JSON.stringify(crimeRecords));
var schoolRating = [
  { area: 'University District',            data: '10'  },
    { area: 'Queen Anne',                   data: '10' },
    { area: 'Northgate',                    data: '9'  },
    { area: 'Capitol Hill',                 data: '8'  },
    { area: 'Ballard',                      data: '7'  },
    { area: 'Belltown',                     data: '4'  },
    { area: 'Downtown',                     data: '3'  },
    { area: 'Fremont',                      data: '3'  },
    { area: 'South Lake Union',             data: '2'  },
    { area: 'Alki',                         data: '1'  }
];
localStorage.setItem('schoolRating', JSON.stringify(schoolRating));
var transportation = [
    { area: 'Downtown',              data: '100' },
    { area: 'Belltown',              data: '100' },
    { area: 'South Lake Union',      data: '91'  },
    { area: 'University District',   data: '77'  },
    { area: 'Capitol Hill',          data: '73'  },
    { area: 'Fremont',               data: '64'  },
    { area: 'Northgate',             data: '61'  },
    { area: 'Queen Anne',            data: '60'  },
    { area: 'Ballard',               data: '53'  },
    { area: 'Alki',                  data: '34'  }
];
localStorage.setItem('transportation', JSON.stringify(transportation));
var housePrice = [
    { area: 'Northgate',              data: '252'  },
    { area: 'University District',    data: '288'  },
    { area: 'Fremont',                data: '314'  },
    { area: 'Ballard',                data: '323'  },
    { area: 'Alki',                   data: '335'  },
    { area: 'Capitol Hill',           data: '358'  },
    { area: 'Belltown',               data: '480'  },
    { area: 'Queen Anne',             data: '490'  },
    { area: 'Downtown',               data: '528'  },
    { area: 'South Lake Union',       data: '532'  }
];
localStorage.setItem('housePrice', JSON.stringify(housePrice));
var income = [
    { area: 'South Lake Union',       data: '23875'  },
    { area: 'Downtown',               data: '25759'  },
    { area: 'Northgate',              data: '32463'  },
    { area: 'Belltown',               data: '36002'  },
    { area: 'University District',    data: '36936'  },
    { area: 'Ballard',                data: '41203'  },
    { area: 'Fremont',                data: '44354'  },
    { area: 'Alki',                   data: '56978'  },
    { area: 'Capitol Hill',           data: '58707'  },
    { area: 'Queen Anne',             data: '93086'  }
];
localStorage.setItem('income', JSON.stringify(income));
var activity = [
  {sport : 'outdoor',  place :[{area:'Queen Anne',data: {number:'10',detail:['Kerry Park','Parsons Garden','Bhy Kracke Park']}},
                             {area:'Capitol Hill',data:{number:'10',detail:['Seven Hills Park','Volunteer Park']}},
                             {area:'Downtown',data: {number:'9',detail:['Waterfront Park']}}
                            ]
                               },
  {sport : 'movies',  place :[{area:'University District',data:{number:'9',detail:['The Varsity Theatre','Grand Illusion Cinema','Sundance Cinemas']}},
                             {area:'Queen Anne',data:{number:'4',detail:['PACCAR IMAX theater','SIFF Cinema']}},
                             {area:'Capitol Hill',data:{number:'4',detail:['Harvard Place Theatre']}}
                            ]
  },
  {sport : 'bar-hopping',  place :[{area:'Downtown',data:{number:'29',detail:['Open Table','Sonya’s Sky Lounge', 'Aura']}},
                             {area:'Fremont',data:{number:'25',detail:['The Ballroom', 'Fremont Brewing Company']}},
                             {area:'Belltown',data:{number:'20',detail:['Amber']}}
                            ]
  },
  {sport : 'foodie',  place :[{area:'Downtown',data:{number:'292',detail:['Sushi Kudasai','Wild Ginger Kitchen','Lecosho']}},
                             {area:'Capitol Hill',data:{number:'209',detail:['Ba Bar', 'Cook Weaver']}},
                             {area:'Belltown',data:{number:'149',detail:['Shiro’s Sushi']}}
                            ]
  }
];
localStorage.setItem('activity', JSON.stringify(activity));
var areaDetail = [
  {name:'Queen Anne',
  crimeRecord:'2,448',
  schoolRating:'10',
  transportation:'60',
  housePrice:'490',
  income:'93086',
  activity:[
    {type:'outdoor',number:'10',detail:['Kerry Park','Parsons Garden','Bhy Kracke Park']},
    {type:'movies',number:'4',detail:['PACCAR IMAX theater','SIFF Cinema']}
    ]
  },
  {name:'Alki',
  crimeRecord:'2,448',
  schoolRating:'1',
  transportation:'34',
  housePrice:'335',
  income:'56978',
  activity:[]
  },
  {name:'Capitol Hill',
  crimeRecord:'2,567',
  schoolRating:'8',
  transportation:'73',
  housePrice:'358',
  income:'58707',
  activity:[
    {type:'outdoor',number:'10',detail:['Seven Hills Park','Volunteer Park']},
    {type:'movies',number:'4',detail:['Harvard Place Theatre']},
    {type:'foodie',number:'209',detail:['Ba Bar', 'Cook Weaver']}
    ]
  },
  {name:'Belltown',
  crimeRecord:'3,298',
  schoolRating:'4',
  transportation:'100',
  housePrice:'480',
  income:'36002',
  activity:[
    {type:'bar-hopping',number:'20',detail:['Amber']},
    {type:'foodie',number:'149',detail:['Shiro’s Sushi']}
    ]
  },
  {name:'Fremont',
  crimeRecord:'3,292',
  schoolRating:'3',
  transportation:'64',
  housePrice:'314',
  income:'44354',
  activity:[
    {type:'bar-hopping',number:'25',detail:['The Ballroom', 'Fremont Brewing Company']}
    ]
  },
  {name:'Ballard',
  crimeRecord:'3,737',
  schoolRating:'7',
  transportation:'53',
  housePrice:'323',
  income:'41203',
  activity:[]
  },
  {name:'Downtown',
  crimeRecord:'3,749',
  schoolRating:'3',
  transportation:'100',
  housePrice:'528',
  income:'25759',
  activity:[
    {type:'outdoor',number:'9',detail:['Waterfront Park']},
    {type:'bar-hopping',number:'29',detail:['Open Table','Sonya’s Sky Lounge', 'Aura']}
    ]
  },
  {name:'South Lake Union',
  crimeRecord:'3,903',
  schoolRating:'2',
  transportation:'91',
  housePrice:'532',
  income:'23875',
  activity:[]
  },
  {name:'Northgate',
  crimeRecord:'6,373',
  schoolRating:'9',
  transportation:'61',
  housePrice:'252',
  income:'32463',
  activity:[]
  },
  {name:'University District',
  crimeRecord:'7,153',
  schoolRating:'10',
  transportation:'77',
  housePrice:'288',
  income:'36936',
  activity:[
    {type:'movies',number:'9',detail:['The Varsity Theatre','Grand Illusion Cinema','Sundance Cinemas']}
    ]
  }
];
localStorage.setItem('areaDetail', JSON.stringify(areaDetail));
