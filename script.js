
var level = parseInt(document.getElementById("level").value);
var points = parseInt(document.getElementById("points").innerHTML);
var pcMoves;
var userMoves = [];


function randomGenerator(min, max) {
   return Math.floor(Math.random() * max) + min;
}

function displayBoard() {
   pcMoves = agentMoves();
   document.getElementById("pcMoves").innerHTML = pcMoves.toString();
   level = parseInt(document.getElementById("level").value);

   var board = document.getElementById("board");
   board.innerHTML = "";

   for (var i = 0; i < level; i++) {
      var cell = document.createElement("div");
      cell.setAttribute("id", "id" + (i + 1));
      cell.addEventListener("click", showCellDelegate("id" + (i + 1)), false);
      cell.innerHTML = "<span>" + (i + 1) + "</span>";
      cell.classList.add("cell");
      board.appendChild(cell);
   }
}

function showCellDelegate(id) {
   return function(){
        showCell(id)
    }
}

function showCell(id) {
   var cell = parseInt(id.slice(2));

   if (!userMoves.includes(cell)) {
      // check if user choose a pc pcMove
      if (pcMoves.includes(cell)){
         alert("YOU LOST");
      } else {
         userMoves.push(cell);
         document.getElementById(id).style.backgroundColor = "red";
         document.getElementById("points").innerHTML = points + 1;
      }

   } else {
      console.log("Choosen yet!");
   }
}


function agentMoves() {
   //agent choose 16 cells
   var pcMoves = [];
   while(pcMoves.length != 16) {
      var rnd = randomGenerator(1, level);
      if (!pcMoves.includes(rnd)){
         pcMoves.push(rnd);
      }
   }
   return pcMoves;
}
