window.onload = function()
{
	document.getElementById('time').innerHTML = 'Today is ' + Date();
	var test = document.getElementsByTagName('table').length;//Grabes number of tables in document
	for (var i = 0; i < test; i++)//runs through the tables in document
	{
		var x = document.getElementsByTagName('table'); //grabs table
		if (x[i].className == "stripe_table") //checks if table has class name stripe_table
		{
			var z = x[0].rows.length;
			for (var y = 0; y < z; y++)
			{
				var xx = x[0].getElementsByTagName('tr');//grab table rows
				if (xx[y].className != "tableHeading") //makes sure that it does not grab table headings
				{
					xx[y].onmouseover = function()   // when you mouse over row
					{
						var zz = this.getElementsByTagName('td'); // grabs table data
						for (var yy = 0; yy < z; yy++)
						{
							zz[yy].style.backgroundColor = "black"; //changes backround color to black
							zz[yy].style.color = 'red'; // changes text to red
						}
						var  xxx = this.getElementsByTagName('a'); // now checks for hyperlinks
						for (var yyy = 0; yyy < xxx.length; yyy++)
						{
								xxx[yyy].style.color = "yellow"; // changes hyperlinks to yellow color
						}
					}
					xx[y].onmouseout = function() // when your mouse leaves row
					{
						var zz = this.getElementsByTagName('td');  //grab table data
						for (var yy = 0; yy < z; yy++)
						{
							zz[yy].style.backgroundColor = ""; //set background color to null
							zz[yy].style.color = ''; // set text color to null
						}
						var  xxx = this.getElementsByTagName('a'); // target hyperlink
						for (var yyy = 0; yyy < xxx.length; yyy++)
						{
								xxx[yyy].style.color = ""; // set text color to null
						}
					}
				}
			}
		}
	}
}