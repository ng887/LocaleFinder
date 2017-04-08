
$(document).ready(function() 
{
	var selection1 = localStorage.getItem('neighborhoods1')
	var selection2 = localStorage.getItem('neighborhoods2')
	document.getElementById("a1Name").innerHTML = selection1
	document.getElementById("a2Name").innerHTML = selection2 


	var crimes = localStorage.getItem('crimeRecords')
	var crimes1 = findData(crimes, selection1)
	var crimes2 = findData(crimes, selection2)
	document.getElementById("a1crimeText").innerHTML = getGradeForCrime(crimes1)
	document.getElementById("a2crimeText").innerHTML = getGradeForCrime(crimes2)
	/*--------------------------------------------------------------------------*/
	var school = localStorage.getItem('schoolRating')
	var school1 = findData(school, selection1)
	var school2 = findData(school, selection2)
	document.getElementById("a1schoolText").innerHTML = getGradeForSchool(school1)
	document.getElementById("a2schoolText").innerHTML = getGradeForSchool(school2)
	/*-----------------------------------------------------------------------------*/
	var transport = localStorage.getItem('transportation')
	var transport1 = findData(transport, selection1)
	var transport2 = findData(transport, selection2)
	document.getElementById("a1transportText").innerHTML = getGradeForTransport(transport1)
	document.getElementById("a2transportText").innerHTML = getGradeForTransport(transport2)
	/*-------------------------------------------------------------------------------------*/
	var house = localStorage.getItem('housePrice')
	var house1 = findData(house, selection1)
	var house2 = findData(house, selection2)
	document.getElementById("a1houseText").innerHTML = getGradeForHousePrice(house1)
	document.getElementById("a2houseText").innerHTML = getGradeForHousePrice(house2)
	/*-------------------------------------------------------------------------------*/
	var income = localStorage.getItem('income')
	var income1 = findData(income, selection1)
	var income2 = findData(income, selection2)
	document.getElementById("a1incomeText").innerHTML = getGradeForIncome(income1)
	document.getElementById("a2incomeText").innerHTML = getGradeForIncome(income2)
});
/***********************************************************************************/
function findData(map, value) 
{
	var list = JSON.parse(map);
	for (var i=0;i<list.length;i++)
	{
		if (list[i].area == value) 
		{
			return list[i].data;
		}
	} 
}

function getGradeForCrime(value) 
{
	value=value.replace(/\,/g,'');
	value=parseInt(value,10);
	if (value < 2500)
	{
		return 'A+'
	} 
	else if (value < 3000) 
	{
		return 'A'
	} 
	else if (value < 3500) 
	{
		return 'B+'
	} 
	else if (value < 4000) 
	{
		return 'B'
	} 
	else if (value < 6500) 
	{
		return 'C'
	} 
	else 
	{
		return 'D'
	}
}

function getGradeForSchool(value)
{
	value=value.replace(/\,/g,'');
	value=parseInt(value,10);
	if (value == 10)
	{
		return 'A+'
	} 
	else if (value == 9)
	{
		return 'A'
	} 
	else if (value == 8)
	{
		return 'B+'
	} 
	else if (value == 7)
	{
		return 'B'
	} 
	else if (value >= 5)
	{
		return 'C'
	} 
	else
	{
		return 'D'
	}
}

function getGradeForTransport(value)
{
 	value=value.replace(/\,/g,'');
	value=parseInt(value,10);
	if (value > 500) 
	{
		return 'A+'

	} 
	else if (value > 400 )
	{
		return 'A'

	} 
	else if (value >300 ) 
	{
		return 'B+'

	} 
	else 
	{
		return 'B'

	} 
}

function getGradeForHousePrice(value)
{
 	value=value.replace(/\,/g,'');
	value=parseInt(value,10);
	if (value > 500) 
	{
		return 'A+'

	} 
	else if (value > 400 )
	{
		return 'A'

	} 
	else if (value >300 ) 
	{
		return 'B+'

	} 
	else 
	{
		return 'B'

	} 
}
function getGradeForIncome(value) 
{
	value=value.replace(/\,/g,'');
	value=parseInt(value,10);
	if (value > 70000)
	{
		return 'A+'
	} 
	else if (value > 50000)
	{
		return 'A'
	} 
	else 
	{
		return 'B'
	}
}

window.onbeforeunload = function() {
  localStorage.removeItem('neighborhoods1');  
  localStorage.removeItem('neighborhoods2');
};