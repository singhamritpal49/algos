function split(sentence){
    var arrayPosition = 0;
    var oneWord = "";
    var newSentence = sentence + " ";
    var split = new Array();
    for(var j = 0; j < newSentence.length; j++){
      if(newSentence[j] === " "){
          split.push(oneWord);
          arrayPosition++;
          oneWord = "";
      }else{
          if(!isNaN(newSentence[j])){
              //don't add to the string
          }else{
              oneWord += newSentence[j];
          }
      }
    }
    return split;
  }