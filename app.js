$(document).ready(function(){
	$('.js-text-form').submit(function(event){
		event.preventDefault();
		//Initial Variable Declarations
		var lowerCaseText = $('.js-text').val().toLowerCase();
		var noPunctuation = lowerCaseText.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
		var wordArray = noPunctuation.split(' ');
		var sentenceArray = lowerCaseText.split(/[.!?]/g);
		var uniqueWords = {};
		var wordLengths = {};
		var sentenceLengths = {};
		//Display js-results section
		$('.js-results').removeClass('hidden');
		//Display word count
		$('#js-wordCount').text(wordArray.length);
		//Make object of words and how often they appear 
		for (var i=0; i<wordArray.length; i++) {
			if (wordArray[i] in uniqueWords) {
				uniqueWords[wordArray[i]]++;
			}
			else uniqueWords[wordArray[i]] = 1;
		};
		//Display unique word count
		var wordCount = Object.keys(uniqueWords).length;
		$('#js-uniqueWordCount').text(wordCount);
		//Create array of word lengths
		for (var j=0; j<wordArray.length; j++) {
			wordLengths[wordArray[j]] = (wordArray[j]).length;
		};
		var wordLengthArray = [];
		for (var k=0; k<wordArray.length; k++) {
			wordLengthArray.push(wordLengths[wordArray[k]]);
		};
		//calculate total length of all words
		var totalWordLength = wordLengthArray.reduce(function(a,b){return a+b});
		//Display average word length
		$('#js-avg-word-length').text((totalWordLength/wordCount).toPrecision(2));
		//Create array of sentence lengths
		for (var l=0; l<sentenceArray.length; l++) {
			sentenceLengths[sentenceArray[l]] = sentenceArray[l].split(' ').length;
		};
		var sentenceLengthArray = [];
		for (var m=0; m<sentenceArray.length; m++) {
			sentenceLengthArray.push(sentenceLengths[sentenceArray[m]]);
		};
		var totalSentenceLength = sentenceLengthArray.reduce(function(a,b){return a+b});
		var sentenceCount = Object.keys(sentenceLengths).length;
		//Display average sentence length
		$('#js-avg-sentence-length').text((totalSentenceLength/sentenceCount).toPrecision(2));
	});

})