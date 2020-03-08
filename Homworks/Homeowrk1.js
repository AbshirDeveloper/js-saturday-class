const sport = "football";

var age = prompt('What is your age?')
if (age > 20){
    document.write("<b>Sorry, you are too old</b>");
    
} 
else  {
    if (age < 20){
    
    var answer = prompt("what sport do like")
    
     if (answer===sport){
         document.write("You are hero");
     }
     else{
         document.write("you are a fool")
     }
   }  





}


