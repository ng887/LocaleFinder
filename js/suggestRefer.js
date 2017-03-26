
var neighboorhood = {
  name:         'Seattle',
  number:       '10',
}
var credit = {
  crime:           '2',
  school:          '1',
  transportation:  '1',
  housePrice:      '2'
}
var criteria = {
  crime:           'crime',
  school:          'school',
  transportation:  'transportation',
  housePrice:      'housePrice'
}
//we can mapping income to house in this way
/*
income      average price
10-50       above 200
50-100      above 500
100-150     above 800
150+        above 1000+
*/

var incomeHousePriceMapping ={
  '10-50'         :'200',
  '50-100'        :'500',
  '100-150'       :'800',
  '150+'          :'1000'
}
