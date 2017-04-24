var crimeRecords = [
    { area: 'Queen Anne',          data: '2448'  },
    { area: 'Alki',                data: '2448'  },
    { area: 'Capitol Hill',        data: '2567'  },
    { area: 'Belltown',            data: '3298'  },
    { area: 'Fremont',             data: '3292'  },
    { area: 'Ballard',             data: '3737'  },
    { area: 'Downtown',            data: '3749'  },
    { area: 'South Lake Union',    data: '3903'  },
    { area: 'Northgate',           data: '6373'  },
    { area: 'University District', data: '7153'  }
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
  crimeRecord:'2448',
  schoolRating:'10',
  transportation:'60',
  housePrice:'490',
  income:'93086',
  image :'queenanne.jpg',
  activity:[
    {type:'outdoor',number:'10',detail:['Kerry Park','Parsons Garden','Bhy Kracke Park']},
    {type:'movies',number:'4',detail:['PACCAR IMAX theater','SIFF Cinema']}
    ]
  },
  {name:'Alki',
  crimeRecord:'2448',
  schoolRating:'1',
  transportation:'34',
  housePrice:'335',
  income:'56978',
  image :'alki.jpg',
  activity:[]
  },
  {name:'Capitol Hill',
  crimeRecord:'2567',
  schoolRating:'8',
  transportation:'73',
  housePrice:'358',
  income:'58707',
  image :'capitolhill.jpg',
  activity:[
    {type:'outdoor',number:'10',detail:['Seven Hills Park','Volunteer Park']},
    {type:'movies',number:'4',detail:['Harvard Place Theatre']},
    {type:'foodie',number:'209',detail:['Ba Bar', 'Cook Weaver']}
    ]
  },
  {name:'Belltown',
  crimeRecord:'3298',
  schoolRating:'4',
  transportation:'100',
  housePrice:'480',
  income:'36002',
  image :'belltown.jpg',
  activity:[
    {type:'bar-hopping',number:'20',detail:['Amber']},
    {type:'foodie',number:'149',detail:['Shiro’s Sushi']}
    ]
  },
  {name:'Fremont',
  crimeRecord:'3292',
  schoolRating:'3',
  transportation:'64',
  housePrice:'314',
  income:'44354',
  image :'fremont.jpg',
  activity:[
    {type:'bar-hopping',number:'25',detail:['The Ballroom', 'Fremont Brewing Company']}
    ]
  },
  {name:'Ballard',
  crimeRecord:'3737',
  schoolRating:'7',
  transportation:'53',
  housePrice:'323',
  income:'41203',
  image :'ballard.jpg',
  activity:[]
  },
  {name:'Downtown',
  crimeRecord:'3749',
  schoolRating:'3',
  transportation:'100',
  housePrice:'528',
  income:'25759',
  image :'downtown.jpg',
  activity:[
    {type:'outdoor',number:'9',detail:['Waterfront Park']},
    {type:'bar-hopping',number:'29',detail:['Open Table','Sonya’s Sky Lounge', 'Aura']}
    ]
  },
  {name:'South Lake Union',
  crimeRecord:'3903',
  schoolRating:'2',
  transportation:'91',
  housePrice:'532',
  income:'23875',
  image :'slu.jpg',
  activity:[]
  },
  {name:'Northgate',
  crimeRecord:'6373',
  schoolRating:'9',
  transportation:'61',
  housePrice:'252',
  income:'32463',
  image :'northgate.jpg',
  activity:[]
  },
  {name:'University District',
  crimeRecord:'7153',
  schoolRating:'10',
  transportation:'77',
  housePrice:'288',
  income:'36936',
  image :'ud.jpg',
  activity:[
    {type:'movies',number:'9',detail:['The Varsity Theatre','Grand Illusion Cinema','Sundance Cinemas']}
    ]
  }
];
localStorage.setItem('areaDetail', JSON.stringify(areaDetail));
var neightbourDescription = [
  {name:'Queen Anne',
   gallery:['queenanne1.jpg','queenanne2.jpg','queenanne3.jpg'],
   history:'Originally called Eden Hill, this neighborhood was one of the last to be completely developed because, well, it’s steep. As you can imagine, the base was the first to be built upon, but nobody really wanted to deal with trekking up to its top to build a home. In fact, land developers tried a “two-for-one” deal, where you could get two plots of land for the price of one if you built a house immediately. Can you imagine something like that happening today?! Once the issue of roads and transportation was solved, however, the area quickly populated. Sadly, no queen ever lived here. So many built Queen Anne style houses, the entire neighborhood adopted the name.',
   education:'Within the Seattle Public Schools district, Queen Anne is home to five public schools.Frantz Coe Elementary,John Hay Elementary (which has had three different buildings, all on Queen Anne Hill),Queen Anne Elementary,McClure Middle School,The Center School',
   wholive:'Makin It Singles - Upper-scale urban singles.Pre-middle-age to middle-age singles with upper-scale incomes. May or may not own their own home. Most have college educations and are employed in mid-management professions.Aspiring Urbanites - Urban singles with moderate income.Low- to middle-income singles over a wide age range. Some have a college education. They work in a variety of occupations, including some management-level positions.Bright Lights, Big City - Very mobile singles living in the city.Singles ranging in age from early 20s to mid-40s who have moved to an urban setting. Most rent their apartment or condo. Some have a college education and work in services and the professional sector.',
   houseexpecse:'Household live in here with high incomes. The price of house is around 490 per Sq. Ft. The rent prices have been adjusted for 2014 dollar values. For instance, the actual average rent for Beacon Hill in 1998 was about $546, but that is adjusted to $801. That is meant to give a better comparison of the change over time.Between 1998 and 2014, Seattle added 14,253 one-bedroom units, an increase of 118 percent. The average rent jumped to $1,412, a 38 percent increase. ',
   activity:'There are about a gazillion events and attractions to keep you busy—Bumbershoot, Folk Life, IMAX theater, Key Arena (Rat City Rollergirls, or Seattle Storm anyone?), the Bite of Seattle, etc. etc. etc. Even if you eliminate that area, there are still tons of cool local restaurants and bars: Uptown Espresso. If this neighborhood had a central nervous system, Queen Anne Avenue would be the spinal cord; it runs straight through the middle and is where most of the important stuff'+ 'happens. Up at the top of the hill, there are about 10 blocks’ worth of unique and charming places to peruse. Though there are great places to nosh—El Diablo (ask for your latte Cuban-style, with caramelized sugar), the famous How to Cook a Wolf, or the down-home 5 Spot with their rotating menu—there are many other things to do! Check out the stellar view of downtown Seattle and Mount Rainier from Kerry Park. Or relax and play a board game before you buy it at Blue Highway Games.Love it!',
  },
  {name:'Alki',
  gallery:['alki1.jpg','alki2.jpg','alki3.jpg'],
  history:'The Denny Party landed at Alki Point November 13, 1851, and platted a settlement of six blocks of eight lots. The original name of the settlement was "New York Alki," "Alki" being a word in  meaning "eventually" or "by and by." Well into the 20th century, Alki was reachable from most of Seattle only by boat. Alki today is reminiscent of a Pacific Northwest beach town, with a mix of mid-century bungalows, medium-rise waterfront apartment houses, waterfront businesses, a thin beach, and a road with a bike/foot trail running several miles along the water. This section of West Seattle is bounded on the northwest by Elliott Bay; on the southwest by Puget Sound; and on the east by the West Seattle hill. There have been summer concerts at Alki Beach since the early 1900s; the original streetcars to West Seattle were established in order to bring people to these events.',
  education:'Alki is the home to Alki Elementary school. The average school test scores in Alki are 11% higher than the national average. 97.8% of people in Alki have completed 8th grade.97.8% of people in Alki have completed high school.61.0% of people in Alki have completed a bachelors degree.',
  wholive:'Six-figure salaried couples with children who live an upscale life in a metro center. Highly educated professionals working in finance, medical, and high-tech fields. Highly educated professionals, many with advanced degrees. They draw a handsome salary and have reasonable living expenses while living a hip, upscale life in an urban center. Middle-age Dual Income No Kids couples living in the city and making very comfortable combined household incomes. Most own their own homes and are highly educated professionals, many with advanced degrees.',
  houseexpecse:'The median home price in Alki is 226% higher than the national average.The median rent asked in Alki is 47% higher than the national average.The average number of people per household in Alki is 27% lower than the national average.The number of owner occupied households in Alki is 29% lower than the national average.The number of renter occupied households in Alki is 52% higher than the national average.',
  activity:'Alki Beach is the principal tourist attraction at Alki Point. Alki Point Lighthouse is a historic landmark. Alki Beach has been a venue for summer concerts every August since the early 20th century. Kayaking is another way for locals and tourists to explore Alki Point. Hamilton Viewpoint Park provides a picturesque view of Elliott Bay. This park is located above Alki Beach on California Avenue SW.',
  },
  {name:'Capitol Hill',
  gallery:['capitolhill1.jpg','capitolhill2.jpg','capitolhill3.jpg'],
  history:'Circa 1900, Capitol Hill was known as Broadway Hill after the neighborhood main thoroughfare. The origin of the neighborhood current name is disputed. According to one story, James A. Moore, the real estate developer who platted much of the area, named it thus in the hope that the Washington government would move to Seattle from Olympia. According to another, Moore named it after the Capitol Hill neighborhood of Denver, Colorado, his wife hometown. Capitol Hill contains some of Seattle wealthiest neighborhoods, including "Millionaire Row" along 14th Avenue E. south of Volunteer Park (family residences on tree-lined streets) and the Harvard-Belmont Landmark District. It also has many distinguished apartment houses.',
  education:'The average school test scores in Capitol Hill are 17% higher than the national average.There are approximately n/a public schools in Capitol Hill.96.8% of people in Capitol Hill have completed 8th grade.96.7% of people in Capitol Hill have completed high school.66.7% of people in Capitol Hill have completed a bachelors degree. The schools in this neighbourhood are Lowell Elementary School and Hutch School.',
  wholive:'Six-figure salaried couples with children who live an upscale life in a metro center. Highly educated professionals working in finance, medical, and high-tech fields. Highly educated professionals, many with advanced degrees. They draw a handsome salary and have reasonable living expenses while living a hip, upscale life in an urban center. Middle-age Dual Income No Kids couples living in the city and making very comfortable combined household incomes. Most own their own homes and are highly educated professionals, many with advanced degrees.',
  houseexpecse:'The median home price in Capitol Hill is 170% higher than the national average.The median rent asked in Capitol Hill is 34% higher than the national average.The average number of people per household in Capitol Hill is 33% lower than the national average.The number of owner occupied households in Capitol Hill is 54% lower than the national average.The number of renter occupied households in Capitol Hill is 98% higher than the national average.',
  activity:'Since the area is known for its music scene, make sure to check out a concert at one of the venues like Neumo’s, pick through a record store like Sonic Boom, or do the extreme and attend the Capitol Hill Block Party in July. You can also say hello to the Jimi Hendrix statue on the corner of Broadway and Pine. If you’re into film, see a movie at the Landmark Harvard Exit – a classic building turned into theaters. Despite being one of the most densely populated areas of the city, Capitol Hill also has a surprising amount of green space, including Volunteer Park, Cal Anderson Park, and Interlaken Park, not to mention the Washington Parks Arboretum on the northeast corner.',
  },
  {name:'Belltown',
  gallery:['belltown1.jpg','belltown2.jpg','belltown3.jpg'],
  history:'We all know that Seattle has some major ups and downs (elevation-wise, of course), but no area was as steep as the region just north of downtown. After years of debating, city developers decided to do the most logical thing: remove the hill itself. The project, known as the Denny Regrade, took the better part of a decade around 1910 and trimmed back tons of earth, leaving the slope more manageable. Despite the new topography, growth didn’t happen as rapidly as hoped. Several businesses set up shop there, but instead of the grand hotels and skyscrapers there were car dealerships and warehouses. It wasn’t until the 1970s that Belltown got a facelift; the area was rezoned for high-rise residences with ample business spaces on street level. Young, trendy folks moved in and made their homes, bringing with them a unique culture that survives today.',
  education:'The average school test scores in Belltown are equal to the national average.There are approximately n/a public schools in Belltown.93.2% of people in Belltown have completed 8th grade.92.8% of people in Belltown have completed high school.63.3% of people in Belltown have completed a bachelors degree.',
  wholive:'Urban singles with an up-and-coming income, but with higher-than-average living costs. Most have college educations and are employed in mid-management professions. Urban couples making a mid- to upper-scale household income. Most own their own homes. Some have a college education and work in a variety of occupations, including management-level positions. Singles ranging in age from early 20s to mid-40s who have moved to an urban setting. Most rent their apartment or condo. Some have a college education and work in services and the professional sector.',
  houseexpecse:'The median home price in Belltown is 118% higher than the national average.The median rent asked in Belltown is 32% higher than the national average.The average number of people per household in Belltown is 48% lower than the national average.The number of owner occupied households in Belltown is 69% lower than the national average.The number of renter occupied households in Belltown is 124% higher than the national average.',
  activity:'Main ‘strip’ of Belltown is 1st Avenue, running parallel to the waterfront and on into downtown. Along this street, you’ll find a gaggle of places to stop: art galleries, clothing stores, home furnishing shops, jewelers, salons, and of course places to eat and drink. Some of the classic venues are The 5 Point Café, The Crocodile (closed for a while, but back by demand of live-music-lovers), and the very vintage Cinerama movie theater. Newer, highly popular additions include Dahlia Lounge, List (an Italian lounge), and Bathtub Gin & Co., a delightful speakeasy tucked in an alley. For a little fresh air, scope out the Olympic Sculpture Park to enjoy the many art installations by local artists, not to mention the view of Puget Sound and the Olympic mountains beyond.',
  },
  {name:'Fremont',
  gallery:['fremont1.jpg','fremont2.jpg','fremont3.jpg'],
  history:'Originally called Eden Hill, this neighborhood was one of the last to be completely developed because, well, it’s steep. As you can imagine, the base was the first to be built upon, but nobody really wanted to deal with trekking up to its top to build a home. In fact, land developers tried a “two-for-one” deal, where you could get two plots of land for the price of one if you built a house immediately. Can you imagine something like that happening today?! Once the issue of roads and transportation was solved, however, the area quickly populated. Sadly, no queen ever lived here. So many built Queen Anne style houses, the entire neighborhood adopted the name.',
  education:'Within the Seattle Public Schools district, Queen Anne is home to five public schools.Frantz Coe Elementary,John Hay Elementary (which has had three different buildings, all on Queen Anne Hill),Queen Anne Elementary,McClure Middle School,The Center School',
  wholive:'Makin It Singles - Upper-scale urban singles.Pre-middle-age to middle-age singles with upper-scale incomes. May or may not own their own home. Most have college educations and are employed in mid-management professions.Aspiring Urbanites - Urban singles with moderate income.Low- to middle-income singles over a wide age range. Some have a college education. They work in a variety of occupations, including some management-level positions.Bright Lights, Big City - Very mobile singles living in the city.Singles ranging in age from early 20s to mid-40s who have moved to an urban setting. Most rent their apartment or condo. Some have a college education and work in services and the professional sector.',
  houseexpecse:'Household live in here with high incomes. The price of house is around 490 per Sq. Ft. The rent prices have been adjusted for 2014 dollar values. For instance, the actual average rent for Beacon Hill in 1998 was about $546, but that is adjusted to $801. That is meant to give a better comparison of the change over time.Between 1998 and 2014, Seattle added 14,253 one-bedroom units, an increase of 118 percent. The average rent jumped to $1,412, a 38 percent increase. ',
  activity:'There are about a gazillion events and attractions to keep you busy—Bumbershoot, Folk Life, IMAX theater, Key Arena (Rat City Rollergirls, or Seattle Storm anyone?), the Bite of Seattle, etc. etc. etc. Even if you eliminate that area, there are still tons of cool local restaurants and bars: Uptown Espresso. If this neighborhood had a central nervous system, Queen Anne Avenue would be the spinal cord; it runs straight through the middle and is where most of the important stuff'+ 'happens. Up at the top of the hill, there are about 10 blocks’ worth of unique and charming places to peruse. Though there are great places to nosh—El Diablo (ask for your latte Cuban-style, with caramelized sugar), the famous How to Cook a Wolf, or the down-home 5 Spot with their rotating menu—there are many other things to do! Check out the stellar view of downtown Seattle and Mount Rainier from Kerry Park. Or relax and play a board game before you buy it at Blue Highway Games.Love it!',
  },
  {name:'Ballard',
  gallery:['ballard1.jpg','ballard2.jpg','ballard3.jpg'],
  history:'Originally called Eden Hill, this neighborhood was one of the last to be completely developed because, well, it’s steep. As you can imagine, the base was the first to be built upon, but nobody really wanted to deal with trekking up to its top to build a home. In fact, land developers tried a “two-for-one” deal, where you could get two plots of land for the price of one if you built a house immediately. Can you imagine something like that happening today?! Once the issue of roads and transportation was solved, however, the area quickly populated. Sadly, no queen ever lived here. So many built Queen Anne style houses, the entire neighborhood adopted the name.',
  education:'Within the Seattle Public Schools district, Queen Anne is home to five public schools.Frantz Coe Elementary,John Hay Elementary (which has had three different buildings, all on Queen Anne Hill),Queen Anne Elementary,McClure Middle School,The Center School',
  wholive:'Makin It Singles - Upper-scale urban singles.Pre-middle-age to middle-age singles with upper-scale incomes. May or may not own their own home. Most have college educations and are employed in mid-management professions.Aspiring Urbanites - Urban singles with moderate income.Low- to middle-income singles over a wide age range. Some have a college education. They work in a variety of occupations, including some management-level positions.Bright Lights, Big City - Very mobile singles living in the city.Singles ranging in age from early 20s to mid-40s who have moved to an urban setting. Most rent their apartment or condo. Some have a college education and work in services and the professional sector.',
  houseexpecse:'Household live in here with high incomes. The price of house is around 490 per Sq. Ft. The rent prices have been adjusted for 2014 dollar values. For instance, the actual average rent for Beacon Hill in 1998 was about $546, but that is adjusted to $801. That is meant to give a better comparison of the change over time.Between 1998 and 2014, Seattle added 14,253 one-bedroom units, an increase of 118 percent. The average rent jumped to $1,412, a 38 percent increase. ',
  activity:'There are about a gazillion events and attractions to keep you busy—Bumbershoot, Folk Life, IMAX theater, Key Arena (Rat City Rollergirls, or Seattle Storm anyone?), the Bite of Seattle, etc. etc. etc. Even if you eliminate that area, there are still tons of cool local restaurants and bars: Uptown Espresso. If this neighborhood had a central nervous system, Queen Anne Avenue would be the spinal cord; it runs straight through the middle and is where most of the important stuff'+ 'happens. Up at the top of the hill, there are about 10 blocks’ worth of unique and charming places to peruse. Though there are great places to nosh—El Diablo (ask for your latte Cuban-style, with caramelized sugar), the famous How to Cook a Wolf, or the down-home 5 Spot with their rotating menu—there are many other things to do! Check out the stellar view of downtown Seattle and Mount Rainier from Kerry Park. Or relax and play a board game before you buy it at Blue Highway Games.Love it!',
  },
  {name:'Downtown',
  gallery:['downtown1.jpg','downtown2.jpg','downtown3.jpg'],
  history:'Originally called Eden Hill, this neighborhood was one of the last to be completely developed because, well, it’s steep. As you can imagine, the base was the first to be built upon, but nobody really wanted to deal with trekking up to its top to build a home. In fact, land developers tried a “two-for-one” deal, where you could get two plots of land for the price of one if you built a house immediately. Can you imagine something like that happening today?! Once the issue of roads and transportation was solved, however, the area quickly populated. Sadly, no queen ever lived here. So many built Queen Anne style houses, the entire neighborhood adopted the name.',
  education:'Within the Seattle Public Schools district, Queen Anne is home to five public schools.Frantz Coe Elementary,John Hay Elementary (which has had three different buildings, all on Queen Anne Hill),Queen Anne Elementary,McClure Middle School,The Center School',
  wholive:'Makin It Singles - Upper-scale urban singles.Pre-middle-age to middle-age singles with upper-scale incomes. May or may not own their own home. Most have college educations and are employed in mid-management professions.Aspiring Urbanites - Urban singles with moderate income.Low- to middle-income singles over a wide age range. Some have a college education. They work in a variety of occupations, including some management-level positions.Bright Lights, Big City - Very mobile singles living in the city.Singles ranging in age from early 20s to mid-40s who have moved to an urban setting. Most rent their apartment or condo. Some have a college education and work in services and the professional sector.',
  houseexpecse:'Household live in here with high incomes. The price of house is around 490 per Sq. Ft. The rent prices have been adjusted for 2014 dollar values. For instance, the actual average rent for Beacon Hill in 1998 was about $546, but that is adjusted to $801. That is meant to give a better comparison of the change over time.Between 1998 and 2014, Seattle added 14,253 one-bedroom units, an increase of 118 percent. The average rent jumped to $1,412, a 38 percent increase. ',
  activity:'There are about a gazillion events and attractions to keep you busy—Bumbershoot, Folk Life, IMAX theater, Key Arena (Rat City Rollergirls, or Seattle Storm anyone?), the Bite of Seattle, etc. etc. etc. Even if you eliminate that area, there are still tons of cool local restaurants and bars: Uptown Espresso. If this neighborhood had a central nervous system, Queen Anne Avenue would be the spinal cord; it runs straight through the middle and is where most of the important stuff'+ 'happens. Up at the top of the hill, there are about 10 blocks’ worth of unique and charming places to peruse. Though there are great places to nosh—El Diablo (ask for your latte Cuban-style, with caramelized sugar), the famous How to Cook a Wolf, or the down-home 5 Spot with their rotating menu—there are many other things to do! Check out the stellar view of downtown Seattle and Mount Rainier from Kerry Park. Or relax and play a board game before you buy it at Blue Highway Games.Love it!',
  },
  {name:'South Lake Union',
  gallery:['slu1.jpg','slu2.jpg','slu3.jpg'],
  history:'Originally called Eden Hill, this neighborhood was one of the last to be completely developed because, well, it’s steep. As you can imagine, the base was the first to be built upon, but nobody really wanted to deal with trekking up to its top to build a home. In fact, land developers tried a “two-for-one” deal, where you could get two plots of land for the price of one if you built a house immediately. Can you imagine something like that happening today?! Once the issue of roads and transportation was solved, however, the area quickly populated. Sadly, no queen ever lived here. So many built Queen Anne style houses, the entire neighborhood adopted the name.',
  education:'Within the Seattle Public Schools district, Queen Anne is home to five public schools.Frantz Coe Elementary,John Hay Elementary (which has had three different buildings, all on Queen Anne Hill),Queen Anne Elementary,McClure Middle School,The Center School',
  wholive:'Makin It Singles - Upper-scale urban singles.Pre-middle-age to middle-age singles with upper-scale incomes. May or may not own their own home. Most have college educations and are employed in mid-management professions.Aspiring Urbanites - Urban singles with moderate income.Low- to middle-income singles over a wide age range. Some have a college education. They work in a variety of occupations, including some management-level positions.Bright Lights, Big City - Very mobile singles living in the city.Singles ranging in age from early 20s to mid-40s who have moved to an urban setting. Most rent their apartment or condo. Some have a college education and work in services and the professional sector.',
  houseexpecse:'Household live in here with high incomes. The price of house is around 490 per Sq. Ft. The rent prices have been adjusted for 2014 dollar values. For instance, the actual average rent for Beacon Hill in 1998 was about $546, but that is adjusted to $801. That is meant to give a better comparison of the change over time.Between 1998 and 2014, Seattle added 14,253 one-bedroom units, an increase of 118 percent. The average rent jumped to $1,412, a 38 percent increase. ',
  activity:'There are about a gazillion events and attractions to keep you busy—Bumbershoot, Folk Life, IMAX theater, Key Arena (Rat City Rollergirls, or Seattle Storm anyone?), the Bite of Seattle, etc. etc. etc. Even if you eliminate that area, there are still tons of cool local restaurants and bars: Uptown Espresso. If this neighborhood had a central nervous system, Queen Anne Avenue would be the spinal cord; it runs straight through the middle and is where most of the important stuff'+ 'happens. Up at the top of the hill, there are about 10 blocks’ worth of unique and charming places to peruse. Though there are great places to nosh—El Diablo (ask for your latte Cuban-style, with caramelized sugar), the famous How to Cook a Wolf, or the down-home 5 Spot with their rotating menu—there are many other things to do! Check out the stellar view of downtown Seattle and Mount Rainier from Kerry Park. Or relax and play a board game before you buy it at Blue Highway Games.Love it!',
  },
  {name:'Northgate',
  gallery:['northgate1.jpg','northgate2.jpg','northgate3.jpg'],
  history:'Originally called Eden Hill, this neighborhood was one of the last to be completely developed because, well, it’s steep. As you can imagine, the base was the first to be built upon, but nobody really wanted to deal with trekking up to its top to build a home. In fact, land developers tried a “two-for-one” deal, where you could get two plots of land for the price of one if you built a house immediately. Can you imagine something like that happening today?! Once the issue of roads and transportation was solved, however, the area quickly populated. Sadly, no queen ever lived here. So many built Queen Anne style houses, the entire neighborhood adopted the name.',
  education:'Within the Seattle Public Schools district, Queen Anne is home to five public schools.Frantz Coe Elementary,John Hay Elementary (which has had three different buildings, all on Queen Anne Hill),Queen Anne Elementary,McClure Middle School,The Center School',
  wholive:'Makin It Singles - Upper-scale urban singles.Pre-middle-age to middle-age singles with upper-scale incomes. May or may not own their own home. Most have college educations and are employed in mid-management professions.Aspiring Urbanites - Urban singles with moderate income.Low- to middle-income singles over a wide age range. Some have a college education. They work in a variety of occupations, including some management-level positions.Bright Lights, Big City - Very mobile singles living in the city.Singles ranging in age from early 20s to mid-40s who have moved to an urban setting. Most rent their apartment or condo. Some have a college education and work in services and the professional sector.',
  houseexpecse:'Household live in here with high incomes. The price of house is around 490 per Sq. Ft. The rent prices have been adjusted for 2014 dollar values. For instance, the actual average rent for Beacon Hill in 1998 was about $546, but that is adjusted to $801. That is meant to give a better comparison of the change over time.Between 1998 and 2014, Seattle added 14,253 one-bedroom units, an increase of 118 percent. The average rent jumped to $1,412, a 38 percent increase. ',
  activity:'There are about a gazillion events and attractions to keep you busy—Bumbershoot, Folk Life, IMAX theater, Key Arena (Rat City Rollergirls, or Seattle Storm anyone?), the Bite of Seattle, etc. etc. etc. Even if you eliminate that area, there are still tons of cool local restaurants and bars: Uptown Espresso. If this neighborhood had a central nervous system, Queen Anne Avenue would be the spinal cord; it runs straight through the middle and is where most of the important stuff'+ 'happens. Up at the top of the hill, there are about 10 blocks’ worth of unique and charming places to peruse. Though there are great places to nosh—El Diablo (ask for your latte Cuban-style, with caramelized sugar), the famous How to Cook a Wolf, or the down-home 5 Spot with their rotating menu—there are many other things to do! Check out the stellar view of downtown Seattle and Mount Rainier from Kerry Park. Or relax and play a board game before you buy it at Blue Highway Games.Love it!',
  },
  {name:'University District',
  gallery:['ud1.jpg','ud2.jpg','ud2.jpg'],
  history:'Originally called Eden Hill, this neighborhood was one of the last to be completely developed because, well, it’s steep. As you can imagine, the base was the first to be built upon, but nobody really wanted to deal with trekking up to its top to build a home. In fact, land developers tried a “two-for-one” deal, where you could get two plots of land for the price of one if you built a house immediately. Can you imagine something like that happening today?! Once the issue of roads and transportation was solved, however, the area quickly populated. Sadly, no queen ever lived here. So many built Queen Anne style houses, the entire neighborhood adopted the name.',
  education:'Within the Seattle Public Schools district, Queen Anne is home to five public schools.Frantz Coe Elementary,John Hay Elementary (which has had three different buildings, all on Queen Anne Hill),Queen Anne Elementary,McClure Middle School,The Center School',
  wholive:'Makin It Singles - Upper-scale urban singles.Pre-middle-age to middle-age singles with upper-scale incomes. May or may not own their own home. Most have college educations and are employed in mid-management professions.Aspiring Urbanites - Urban singles with moderate income.Low- to middle-income singles over a wide age range. Some have a college education. They work in a variety of occupations, including some management-level positions.Bright Lights, Big City - Very mobile singles living in the city.Singles ranging in age from early 20s to mid-40s who have moved to an urban setting. Most rent their apartment or condo. Some have a college education and work in services and the professional sector.',
  houseexpecse:'Household live in here with high incomes. The price of house is around 490 per Sq. Ft. The rent prices have been adjusted for 2014 dollar values. For instance, the actual average rent for Beacon Hill in 1998 was about $546, but that is adjusted to $801. That is meant to give a better comparison of the change over time.Between 1998 and 2014, Seattle added 14,253 one-bedroom units, an increase of 118 percent. The average rent jumped to $1,412, a 38 percent increase. ',
  activity:'There are about a gazillion events and attractions to keep you busy—Bumbershoot, Folk Life, IMAX theater, Key Arena (Rat City Rollergirls, or Seattle Storm anyone?), the Bite of Seattle, etc. etc. etc. Even if you eliminate that area, there are still tons of cool local restaurants and bars: Uptown Espresso. If this neighborhood had a central nervous system, Queen Anne Avenue would be the spinal cord; it runs straight through the middle and is where most of the important stuff'+ 'happens. Up at the top of the hill, there are about 10 blocks’ worth of unique and charming places to peruse. Though there are great places to nosh—El Diablo (ask for your latte Cuban-style, with caramelized sugar), the famous How to Cook a Wolf, or the down-home 5 Spot with their rotating menu—there are many other things to do! Check out the stellar view of downtown Seattle and Mount Rainier from Kerry Park. Or relax and play a board game before you buy it at Blue Highway Games.Love it!',
}
];
localStorage.setItem('neightbourDescription', JSON.stringify(neightbourDescription));
