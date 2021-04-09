player1_name = localStorage.getItem("player1");
player2_name = localStorage.getItem("player2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1name").innerHTML = player1_name + " =" ;
document.getElementById("player2name").innerHTML = player2_name + " =" ;

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ; 

document.getElementById("question_turn").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("answer_turn").innerHTML = "Answer Turn - " + player2_name ;

function send(){
number_1 = document.getElementById("number_1").value;
number_2 = document.getElementById("number_2").value;
  final = number_1 + "x" + number_2; 
   
question = "<h4 id = 'word_display'>Q." + final + "</h4>";
input = "<br>Answer:<input type = 'text' id = 'answer_input'>";
button = "<br><br><button onclick = 'Save()' class = 'bu'>Check</button>";
row = question + input + button ;
document.getElementById("output").innerHTML = row;
document.getElementById("number_1").value = "";
document.getElementById("number_2").value = "";
}