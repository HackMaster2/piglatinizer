$( document ).ready(function() {
  $("button").click(function(){
  	var input = $("input").val();
  	var output = translate(input);
  	$("#result").text(output);
  });
});
function ay(word) {
    return word + "ay";
}

//function wordsplit(x){
    
  //  return x.split(" ");
//}
function translate(sentence) {
    var array = sentence.split(" ");
    var piglatinwords = "";
    for (var i = 0; i < array.length; i = i + 1) {
        var word = array[i];
        var pig = ay (word);
        piglatinwords = piglatinwords + " " + wordToPigLatin(word);
    }
    return piglatinwords;
}
function startsWithAVowel(word) {
  var firstLetter = word[0].toLowerCase();
  
  if (firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u") {
    return true;
  } else {
    return false;
  }
}

function wordToPigLatin(word) {
	var result;
	if (startsWithAVowel(word)) {
		result = word + "ay";
	} else {
		result = word.slice(1) + word[0] + "ay";
	}
	return result;
}
   // function piglatin(word){
	//   return word + "ay"
//}
//function sentenceToPigLatin(sentences){
//	var words = sentences.split(" ");
//}

/*
    checkVowl("angel") = -> true
    evergreen
    checkVowel("car") -> false


*/

function checkVowel(word){
    
}

//function isTheLetterA(word) {
  //  var firstLetter = word[0];
 //   if (word[0] === "a" == "e" == "i" == "o" == "u"){
 //       return word + "ay";
 //   }
//}

function piglatinze(sentence){
    //return sentence.slice(1,sentence.length) + sentence[0] + "ay";
}
var vowel = ["a" , "e" , "i" , "o" , "u"];
//return sentences.slice(1,sentences.length) + sentences[0]