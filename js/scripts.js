$(document).ready(function(){
  $("form#pig-latin").submit(function(event){
    event.preventDefault();
    var sentence = $("input#sentence").val();
    var words = sentence.split(" ");
    var result="";

    var firstLetter = words.forEach(function(word){
        if (word.charAt(0)=="a" || word.charAt(0)=="e" || word.charAt(0)=="i" || word.charAt(0)=="o" || word.charAt(0)=="u"){
          result+=word + "way" + " ";
          
        } 
        else if (word.charAt(0)!="a" || word.charAt(0)!="e" || word.charAt(0)!="i" || word.charAt(0)!="o" || word.charAt(0)!="u"){
          word += word.charAt(0) + "ay" + " ";
          word = word.split(""); 
          word[0] = ""; 
          word = word.join("");
          result += word;

          console.log(word);
          console.log(result);     
      }
    });

   
    
    firstLetter(words);
  });
});
   
