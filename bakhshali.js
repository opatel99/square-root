/*
    @project Bakhshali Approximation for Square Roots
	@author Ohm Patel
	@website ohmjpatel.com
	@github github.com/opatel99
*/
function closestSquare(input) // Returns N where N^2 is the closest square to input
{
	var approximate = 0;
	for (i = 0; i <= input; i++)
	{
		if (i * i <= input)
		{
			approximate = i;
		}
		else
		{
			break;
		}
	}
	return approximate;
}

function bakhshali(input)
{
	var close = closestSquare(input);
	var difference = input - close * close;
	var p = difference / (2 * close);
	var a = close + p;
	var approximate = a - (p * p) / (2 * a);
	return approximate;
}