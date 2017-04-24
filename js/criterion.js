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
  history:'Flashback to 1891 and you would find 5000 early pioneers living here, with their own wood mill and a draw-bridge-free commute to downtown (this was pre-ship canal days, afterall). The early 1940s saw an end to rail and trolley service to the area, and sent the area into a bit of a lull. Neglect and low rents turned Fremont into an attractive option for artists and students in the 1960s – laying the groundwork for the funky and eclectic vibe still apparent today.',
  education:'Compared to other areas in Seattle, school rate is Fremont is slight lower ,  there are 4 elementary schools  ( App At Lincoln, Kapka Cooperative School, St Benedict School, B F Day Elementary School, Northwest Montessori School Woodland Park Cam); 2 middle schools(Hamilton International Middle School,'
   +'Pacific Crest Schools); 1 high schools(Hawthorn Schools)',
  wholive:'Pre-middle-age to middle-age singles with upper-scale incomes. May or may not own their own home. Most have college educations and are employed in mid-management professions.Singles ranging in age from early 20s to mid-40s who have moved to an urban setting. Most rent their apartment or condo. Some have a college education and work in services and the professional sector.Young childless couples living in the city. Most own their own homes. Education varies from high school to college with some holding mid-management positions.',
  houseexpecse:'Household live in here with decent income. The price of house is around 314 per Sq.   Real estate sales for median list price is $675,000. As of March 2017, average apartment rent within the city of of Fremont, CA is$2353. One bedroom apartments in Fremont rent for $2134 a month on average and two bedroom apartment rents average $2498.',
  activity:'Fremont has a festival or event for all ages and lifestyles, including the Summer Solstice Parade (a colorful Mardi Gras-style parade with the famous rogue band of nekkid bicyclists), Oktoberfest, Outdoor Movies and First Friday Artwalk to name a few. Each Sunday, bargain hunters flock to the Fremont Sunday Street Market– a flea market / farmer’s market style gathering with food vendors too. In Fremont, you can take a tour of a chocolate factory, distillery, and brewery – all in one'
   +'day! You can also grab an amazing sandwich at Paseos, eat a freshly made pie at Pie, slurp a bowl of Pho at Lucky’s, or sit down for creative Mexican cuisine and a killer margarita at el Camino. The creative vibe is still alive and well here, with great galleries, boutiques, an excellent statuary and garden shop, and a couple of antique stores. No one leaves Fremont without saying hi to the Troll, checking out what is accessorizing the Interurban sculpture , or blasting off the Rocket.  What’s not to love about the Center of the Universe?',
  },
  {name:'Ballard',
  gallery:['ballard1.jpg','ballard2.jpg','ballard3.jpg'],
  history:'Ever been driving along and seen “Free Ballard!” bumper stickers plastered all over the car in front of you? Well, here’s why: Ballard was once its own city, home to many people of Scandinavian descent who worked as fishermen, mill workers, and boat builders. The neighborhood thrived as the commercial district (aka Ballard Avenue) grew, and by 1900 it was the 2nd largest city in King County, with 17,000 residents. In 1907, however, the city of Ballard was annexed by Seattle because it was having trouble supplying its people with water and other services. That decision is still hotly attested by some. Hence the bumper stickers.',
  education:'Ballard with good school rate in Seattle, with 3 elementary schools ( North Beach Elementary School,  Loyal Heights Elementary School, Whittier Elementary School); 5 middle schools(St. John School , Whitman Middle School , Matheia School, Salmon Bay School, Solve For (x) School); 3 high schools(Wexford School,  Ballard High School, Middle College High School)',
  wholive:'Makin It Singles - Upper-scale urban singles.Pre-middle-age to middle-age singles with upper-scale incomes. May or may not own their own home. Most have college educations and are employed in mid-management professions.Aspiring Urbanites - Urban singles with moderate income.Low- to middle-income singles over a wide age range. Some have a college education. They work in a variety of occupations, including some management-level positions.Bright Lights, Big City - Very mobile singles living in the city.Singles ranging in age from early 20s to mid-40s who have moved to an urban setting. Most rent their apartment or condo. Some have a college education and work in services and the professional sector.',
  houseexpecse:'Household live in here with decent income. The price of house is around 323 per Sq. Ft.  Real estate sales for median list price is $735,000. Between 1998 and 2014, Seattle added 14,253 one-bedroom units, an increase of 118 percent. The average rent jumped to $1,412, a 38 percent increase. Ballard rent has far surpassed Seattle`s average, rising 75 percent to about $1,500 for a one-bedroom unit in 2014',
  activity:'One of Ballard’s most-visited attractions is the Hiram M. Chittenden Locks, which were built in 1917. Engineering buffs will enjoy the well-orchestrated mechanics of it all, and dreamers can imagine sunning themselves on the huge yachts that pass through. You can also go to the underwater observatory and watch the salmon swimming up the fish ladder on their way to Lake Washington and beyond. In the summer months, Golden Gardens Park is a major destination. It’s one of the few sandy'
   +'beaches in Seattle, and you’ll find beach volleyball courts, kite flyers, sand castles, and barbecue pits. Sure, the water is still frigid, but on the right day you feel just like you’re in Maui. Every Sunday during the year, the Ballard Farmer’s Market is open for business. Ballard Avenue is closed down to make room for local growers and vendors, plus a variety of artists selling their wares, from jewelry to furniture. This is one of the few year-round markets in the city, and since'
   +'the selection is always changing, it’s easy to make it a weekly stop.',
  },
  {name:'Downtown',
  gallery:['downtown1.jpg','downtown2.jpg','downtown3.jpg'],
  history:'The original Downtown looked a lot different than it does today; wooden buildings, a saw mill, steeper hills. Two major events changed it all: the Seattle fire of 1889, which burned most of Downtown to the ground, and the Denny Regrade, a thirty-year-long project that tamed the slopes of Denny Hill. Add in the major growth of skyscrapers, roadways such as I-5 and the Alaskan Way Viaduct, and the Seattle Center, and you’ve literally got a city that has rebuilt itself out of the ashes.Many historic landmarks have been preserved however, like the Smith tower, Pioneer Square, and Pike Place Market. You can still take a tour of “underground Seattle” to see the remarkable still-intact structures that were just covered up and built on top of after the fire.',
  education:'The average school test scores in Downtown are equal to the national average.There are approximately n/a public schools in Downtown.87.7% of people in Downtown have completed 8th grade.86.7% of people in Downtown have completed high school.48.8% of people in Downtown have completed a bachelors degree.',
  wholive:'Corporate Climbers - High-income, high-expense urban singles.High $$ DINKs - Urban high-income couples with no children.Bright Lights, Big City - Very mobile singles living in the city.',
  houseexpecse:'The median home price in Downtown is 125% higher than the national average.The median rent asked in Downtown is 16% higher than the national average.The average number of people per household in Downtown is 46% lower than the national average.The number of owner occupied households in Downtown is 77% lower than the national average.The number of renter occupied households in Downtown is 140% higher than the national average.Schools in this neighborhood are Northwest School,Puget Sound Community School and O’Dea High School.',
  activity:'This part shouldn’t be hard, but it is. How can we boil down the busiest neighborhood in the city to just a few recommended activities? Especially when they’re always changing, after all, and there are as many things to choose from as there are different tastes in hobbies?We could state the cultural stuff, like the Seattle Art Museum or the Symphony at Benaroya Hall. There are theaters and performance halls for every type of entertainment—the Paramount, 5th Avenue Theater, and the '+'Showbox, just to name a few.Or we could mention the retail scene. If shopping is your thing, Westlake Center and Pacific Place have a mix of high-end and regular retailers, not to mention all of the one-of-a-kind boutiques and home furnishing stores that line any given street in the area.Then there’s the touristy stuff. If you’re into sightseeing, spend an afternoon on the piers on the waterfront, or maybe take a tour on an Argosy cruise boat or at Let’s Go Sailing. The Smith Tower offers '+  'rides up to the observation deck so you can see the view of the whole city.',
  },
  {name:'South Lake Union',
  gallery:['slu1.jpg','slu2.jpg','slu3.jpg'],
  history:'In its early days, this region was where timber and coal arrived by barge from across the shores of Lake Washington and was further transported to Elliot Bay, where it went on to California and other places along the west coast. In other words, South Lake Union was instrumental in the growth of the city. Sadly, after most of the trees had been cleared, business declined and the neighborhood went through a depression. Microsoft co-founder Paul Allen and his Vulcan Real Estate have rapidly changed the deserted warehouse district into a thriving hi-tech hub.  The addition of a trolley system, a new park along the shore of Lake Union, and retail/apartment buildings have, in recent years, given South Lake Union the feeling of a neighborhood again.',
  education:'There are nine elementary schools with 90+ rating. The names are Wedgwood Elementary School,Laurelhurst Elementary School,West Woodland Elementary School,Whittier Elementary School.',
  wholive:'Melting Pot - Low-income, foreign-language-speaking urbanites.Lower-income population mainly employed in service jobs. Most have a high school education or lower.Ramen Metros - Lower-income urban singles.Most rent their apartment or condo. Some have a college education and work in services and the professional sector.Bright Lights, Big City - Very mobile singles living in the city.Singles ranging in age from early 20s to mid-40s who have moved to an urban setting. Most rent their apartment or condo. Some have a college education and work in services and the professional sector.',
  houseexpecse:'The median home price in South Lake Union is 86% higher than the national average.The median rent asked in South Lake Union is 49% higher than the national average.The average number of people per household in South Lake Union is 51% lower than the national average.The number of owner occupied households in South Lake Union is 81% lower than the national average.he number of renter occupied households in South Lake Union is 146% higher than the national average.',
  activity:'To learn about the history of Lake Union and the surrounding neighborhood, hit up the new Lake Union Park (finished in 2010). Here, you can visit the Center for Wooden Boats, learn how to sail or paddle a dragon boat, or take a class on carving your own wooden boat. Or, just frolic on the grassy knoll for the afternoon. As far as the other options for dining, shopping, and exploring, it’s really hard to know where to start. One of the best places to start would be along Westlake Avenue. Try the Dahlia Bakery for an amazing breakfast sandwich, or the Row House Café, which is built into a historic house. Once fortified, think about renting a scooter from Scoot About—there’s no better way to explore the neighborhood than on a cute little Vespa!',
  },
  {name:'Northgate',
  gallery:['northgate1.jpg','northgate2.jpg','northgate3.jpg'],
  history:'It’s hard to imagine the Northgate area as it once was—a bog, inhabited by Native Americans and farmed for cranberries and other wild foods. Settlements crept in as they often do, and now we have Interstate 5, North Seattle Community College, and the Northgate mall in place of the original habitat. The mall is its own kind of jungle, however. And apparently this was the country’s first shopping center to be called a “mall,” so we should all take a moment to thank this neighborhood'+ 'for revolutionizing our collective retail experiences. More recently, new housing and commercial complexes have been built, while at the same time work has been done to preserve and protect Thornton Creek, which runs through the neighborhood.',
  education:'Northgate with fine school rate in Seattle, with 4 elementary schools ( Sacajawea Elementary School,   Olympic View Elementary School, The Perkins School, Seattle Waldorf School l); 4 middle schools(Dartmoor School , Menachem Mendel Seattle Cheder Day School ); 2 high schools(Nathan Hale High School, Spring Academy, Brightmont Academy - Seattle Campus)',
  wholive:'Non-native Newbies - Foreign-born individuals who just moved to U.S.A significant proportion of people who have moved to the U.S. from Puerto Rico, the U.S. Island Areas, or a foreign country. Wide age range. Some have a high school or college education, and they work in a variety of occupations.'+
          'Humble Class - Lower-income couples.Mixed educational status with some having a high school education and some college. Occupations range from service work to the professional sector.'+
          'Aspiring Urbanites - Urban singles with moderate income.Low- to middle-income singles over a wide age range. Some have a college education. They work in a variety of occupations, including some management-level positions.',
  houseexpecse:'Household live in here with Seattle average  income. The price of house is around 252 per Sq. Ft.  Real estate sales for median list price is $550,000. As of March 2017, average apartment rent within the city of of Seattle, WA is $2113. One bedroom apartments in Seattle rent for $1959 a month on average and two bedroom apartment rents average $2667.',
  activity:'Just for a minute, let’s pretend the mall isn’t there (sad, I know). What would you do in Northgate if there were no Nordstrom or Target? Well, you could go golfing at the Jackson Park Golf Club. You could pick one of the many parks and hit up the swing sets or grassy knolls. You’re going to want to pop into holes-in-the-wall like Jebena Café, BurgerMaster, Gyro Hut, Bark! Espresso, or Boud’s Pinehurst Pub. Finally, book a spa day at one of the many salons—there are even some for dogs, too!',
  },
  {name:'University District',
  gallery:['ud1.jpg','ud2.jpg','ud2.jpg'],
  history:'When this land was first reserved as a potential site for a university or even an industrial center, the land developer called it Brooklyn, comparing the area to Brooklyn, New York, because of its position across the water from the main part of the city. Once the UW was established in 1895, people began referring to the area as University Station, and gradually the name Brooklyn fell by the wayside. The University of Washington was the site of the Alaska-Yukon-Pacific Exposition in the early 1900s, which led to the development of many new buildings, businesses, and the general beautification of the landscape. Much of the architecture still remains on campus, and the developers had the foresight to keep the view of Mt. Rainier unobstructed in many places. University Avenue was the center of the action for visitors. If you’ve been to ‘The Ave’ recently, you know that this phenomenon hasn’t changed in the past 100 years! Nor, probably, will it ever.',
  education:'There are nine elementary schools with 90+ rating. The names are Wedgwood Elementary School,Laurelhurst Elementary School,West Woodland Elementary School,Whittier Elementary School,Lawton Elementary School,Loyal Heights Elementary School,View Ridge Elementary School,John Stanford International Elementary School,Bryant Elementary School.',
  wholive:'Non-native Newbies - Foreign-born individuals who just moved to U.S.A significant proportion of people who have moved to the U.S. from Puerto Rico, the U.S. Island Areas, or a foreign country. Wide age range. Some have a high school or college education, and they work in a variety of occupations.College Life - Students in higher education. These individuals are enrolled in college or graduate school.People in college or graduate school.Bright Lights, Big City - Very mobile singles living in the city.Singles ranging in age from early 20s to mid-40s who have moved to an urban setting. Most rent their apartment or condo. Some have a college education and work in services and the professional sector.',
  houseexpecse:'The median home price in University District is 68% higher than the national average.The median rent asked in University District is 13% higher than the national average.The average number of people per household in University District is 32% lower than the national average.The number of owner occupied households in University District is 78% lower than the national average.The number of renter occupied households in University District is 141% higher than the national average.',
  activity:'Even if you’re not a student, or in your twenties, the U-District still has tons of stuff that might appeal to you. The University Farmers Market runs year-round and is a great way to spend a Saturday morning. Pick up some produce for the week, chat up the super-friendly vendors, and listen to the street performers play their fiddles or didgeridoos (there’s always something different)! Every May, the U-District Street Fair takes over the Ave in a “country fair meets urban retail'+ 'corridor” atmosphere. People flock from all over the city to see live bands perform, sample food from local vendors, and peruse the crafts of local artists. Popping through at a less peak time also has its benefits. Take a walk through UW campus and check out the infinitely cool library building or maybe the Burke Museum. If it’s rainy out (not that it ever is), the neighborhood has several historic theaters, including the Sundance Cinema and Varsity as well as the Neptune, which is '+          'transforming to a music venue in Fall 2011. The Historic University Theater specializes in improv shows. Hungry? Go to Portage Bay Café for breakfast—they have a ‘toppings bar’ for you to doctor up your pancakes and French toast any way you like! Get some Thai food at Thai Tom for lunch, but be prepared to wait in line for one of their six tables. In the evening, hit up the College Inn pub, which was built for the very same Alaska-Yukon-Pacific Exposition that brought all the action to this neighborhood in the first place!',
}
];
localStorage.setItem('neightbourDescription', JSON.stringify(neightbourDescription));
