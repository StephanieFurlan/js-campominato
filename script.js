
var level, poitns, pcMoves, userMoves, pointsDiv, board;


function initializeGame() {
   // initialize game parameters
   level = parseInt(document.getElementById("level").value);
   pcMoves = agentMoves();
   userMoves = [];
   board = document.getElementById("board");
   points = 0;
   pointsDiv = document.getElementById("points");
   pointsDiv.innerHTML = "Score: " + points;
   pointsDiv.style.display = "block";

   // display custom board depend on chosen level
   board.innerHTML = "";
   board.style.visibility = "visible";

   for (var i = 0; i < level; i++) {
      var cell = document.createElement("div");
      cell.setAttribute("id", "id" + (i + 1));
      // add an event listner to every cell
      cell.addEventListener("click", initializeCell("id" + (i + 1)), false);
      cell.innerHTML = "<span>" + (i + 1) + "</span>";
      cell.classList.add("cell");
      board.appendChild(cell);
   }
}

function initializeCell(id) {
   // invoke function only when clicking
   return function(){
        checkCell(id)
    }
}

function checkCell(id) {
   // checkCell
   var cell = parseInt(id.slice(2));
   if (!userMoves.includes(cell)) {
      // check if user choose a pc pcMove
      if (pcMoves.includes(cell)){
         // end game
         var message = "YOU LOST! YOU DID " + points + " POINTS!";
         alert(message);
      } else {
         //valid move
         userMoves.push(cell);
         //add points
         points += 1;
         document.getElementById(id).style.backgroundColor = "#45ada8";

         if (points == level - 16) {
            alert("YOU WON. YOUR SCORE IS " + points + "!");
         }
         pointsDiv.innerHTML = points;
      }

   }
}

// 16 different random numbers
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

function randomGenerator(min, max) {
   return Math.floor(Math.random() * max) + min;
}
