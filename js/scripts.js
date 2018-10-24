$(document).ready(function(){
  $("form#pig-latin").submit(function(event){
    event.preventDefault();
    var sentence = $("input#sentence").val();
    var words = sentence.split(" ");
    var vowels = ["a", "e", "i", "o", "u"];
    var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];
    var result="";

    var firstLetter = words.forEach(function(word){
      if (word.charAt(0)=="q" && word.charAt(1)=="u"){
        word += word.charAt(0) + word.charAt(1) + "ay" + " ";
        word = word.split(""); 
        word[0] = ""; 
        word[1] = "";
        word = word.join("");
        result += word;

      }   
      else if (vowels.includes(word.charAt(0))){
          result+=word + "way" + " ";
          console.log("starts with vowel");
        } 
      else if(consonants.includes(word.charAt(0))){

        var firstLetter = word.charAt(0);
        var count = 1;
        
      while(word.charAt(count) == firstLetter) {
          count++;
        }

        var splice = word.slice(count) + word.slice(0, count);
        word = splice;
        word += "ay" + " ";
        result += word;

      }
      });

  

    

    $("#output").html("<h1>"+result+"</h1>");

  });
});
   
