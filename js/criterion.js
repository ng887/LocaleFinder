var crimeRecords = [
    { area: 'Queen Anne',          data: '2,448',  },
    { area: 'Alki',                data: '2,448',  },
    { area: 'Capitol Hill',        data: '2,567',  },
    { area: 'Belltown',            data: '3,298',  },
    { area: 'Fremont',             data: '3,292',  },
    { area: 'Ballard',             data: '3,737',  },
    { area: 'Downtown',            data: '3,749',  },
    { area: 'South Lake Union',    data: '3,903',  },
    { area: 'Northgate',           data: '6,373',  },
    { area: 'University District', data: '7,153',  },
];
localStorage.setItem('crimeRecords', JSON.stringify(crimeRecords));

var schoolRating = [
    { area: 'University District',          data: '10', },
    { area: 'Queen Anne',                   data: '10', },
    { area: 'Northgate',                    data: '9',  },
    { area: 'Capitol Hill',                 data: '8',  },
    { area: 'Ballard',                      data: '7',  },
    { area: 'Belltown',                     data: '4',  },  
    { area: 'Downtown',                     data: '3',  },
    { area: 'Fremont',                      data: '3',  },
    { area: 'South Lake Union',             data: '2',  },
    { area: 'Alki',                         data: '1',  },
];
localStorage.setItem('schoolRating', JSON.stringify(schoolRating));

var transportation = [
    { area: 'Downtown',              data: '100', },
    { area: 'Belltown',              data: '100', },
    { area: 'South Lake Union',      data: '91',  },
    { area: 'University District',   data: '77',  },
    { area: 'Capitol Hill',          data: '73',  },
    { area: 'Fremont',               data: '64',  },
    { area: 'Northgate',             data: '61',  },
    { area: 'Queen Anne',            data: '60',  },
    { area: 'Ballard',               data: '53',  },
    { area: 'Alki',                  data: '34',  },
    
    
  
];
localStorage.setItem('transportation', JSON.stringify(transportation));

var housePrice = [
    { area: 'Northgate',              data: '252',  },
    { area: 'University District',    data: '288',  },
    { area: 'Fremont',                data: '314',  },
    { area: 'Ballard',                data: '323',  },
    { area: 'Alki',                   data: '335',  },
    { area: 'Capitol Hill',           data: '358',  },
    { area: 'Belltown',               data: '480',  },
    { area: 'Queen Anne',             data: '490',  },
    { area: 'Downtown',               data: '528',  },
    { area: 'South Lake Union',       data: '532',  },
];
localStorage.setItem('housePrice', JSON.stringify(housePrice));

/*var income = [
    { area: 'Queen Anne',             data: '93086',  }, 
    { area: 'Capitol Hill',           data: '58707',  },
    { area: 'Alki',                   data: '56978',  },
    { area: 'Fremont',                data: '44354',  },
    { area: 'Ballard',                data: '41203',  },
    { area: 'University District',    data: '36936',  },
    { area: 'Belltown',               data: '36002',  },
    { area: 'Northgate',              data: '32463',  },
    { area: 'Downtown',               data: '25759',  },
    { area: 'South Lake Union',       data: '23875',  },
];
localStorage.setItem('income', JSON.stringify(income));*/

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
  {sport : 'Bar-hopping',  place :[{area:'Downtown',data:{number:'29',detail:['Open Table','Sonya’s Sky Lounge', 'Aura']}},
                             {area:'Fremont',data:{number:'25',detail:['The Ballroom', 'Fremont Brewing Company']}},
                             {area:'Belltown',data:{number:'20',detail:['Amber']}}
                            ]
  }
  {sport : 'foodie',  place :[{area:'Downtown',data:{number:'292',detail:['Sushi Kudasai','Wild Ginger Kitchen','Lecosho']}},
                             {area:'Capitol Hill',data:{number:'209',detail:['Ba Bar', 'Cook Weaver']}},
                             {area:'Belltown',data:{number:'149',detail:['Shiro’s Sushi']}}
                            ]
  }
];
localStorage.setItem('activity', JSON.stringify(activity));
