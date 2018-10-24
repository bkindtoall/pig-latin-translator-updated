$(document).ready(function(){
  $("form#pig-latin").submit(function(event){
    event.preventDefault();
    var sentence = $("input#sentence").val();
    var words = sentence.split(" ");
    var vowels = ["a", "e", "i", "o", "u"];
    var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y","z"];
    var result="";

    words.forEach(function(word){
      if (word.charAt(0)=="q" && word.charAt(1)=="u"){
        let splice = word.slice(2) + word.slice(0,2);
        word = splice;
        word+= "ay" + " ";
        result += word;
      }   
      else if (vowels.includes(word.charAt(0))){
          result+=word + "way" + " ";
        } 
      else if(consonants.includes(word.charAt(0))){

        let firstLetter = word.charAt(0);
        let count = 1;
        
      while(word.charAt(count) == firstLetter) {
          count++;
        }

        let splice = word.slice(count) + word.slice(0, count);
        word = splice;
        word += "ay" + " ";
        result += word;

      }
    });


    $("#output").html("<h1>"+result+"</h1>");

  });
});
   
