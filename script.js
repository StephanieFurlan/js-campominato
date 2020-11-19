
var level, poitns, pcMoves, userMoves;



function randomGenerator(min, max) {
   return Math.floor(Math.random() * max) + min;
}

function initializeGame() {
   level = parseInt(document.getElementById("level").value);
   pcMoves = agentMoves();
   points = 0;
   document.getElementById("points").innerHTML = points;
   userMoves = [];

   // just to verify if we play ok
   document.getElementById("pcMoves").innerHTML = pcMoves.toString();

   // customize board depend on chosen level
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
         // end game
         alert("YOU LOST");
      } else {
         //valid move
         userMoves.push(cell);
         points += 1;
         document.getElementById(id).style.backgroundColor = "red";

         if (points == level - 16) {
            alert("YOU WON. YOUR SCORE IS " + points + "!");
         }

         document.getElementById("points").innerHTML = points;
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
