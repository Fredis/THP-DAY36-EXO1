function my_max(array)
{
	var max = 0;

	array.forEach(function(ArrayElement) {
		
		if(ArrayElement > max) {
			max = ArrayElement;
		}

	});

	alert("Nombre max : " + max)
}

function vowel_count(word)
{

	var regex = /[aeiouyAEIOUY]/;
	var count = 0;
	var count_vowel = 0;

	while(count != word.length) {

		if(regex.test(word.charAt(count)) == true) {
			count_vowel += 1;
		}
		count += 1;
	}
	alert("Nombre de voyelles : " +  count_vowel);
}

my_max([10, 20, 5, 38, 17]);
vowel_count("AaEEfghsO");