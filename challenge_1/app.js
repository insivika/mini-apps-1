


// Rules 
// Players X and O alternate
// Player wins if 3 of same kind are lined up either in a row or diagonal

// Get each field
let playerX = true;
let playerO = false;

const playerXUI = document.getElementById('player-1');
const playerOUI = document.getElementById('player-2');

playerXUI.style.color = 'red';

// Row 1
const field00 = document.getElementById('00')
const field01 = document.getElementById('01')
const field02 = document.getElementById('02')

// Row 2
const field10 = document.getElementById('10')
const field11 = document.getElementById('11')
const field12 = document.getElementById('12')

// Row 3
const field20 = document.getElementById('20')
const field21 = document.getElementById('21')
const field22 = document.getElementById('22')



// Inline Rows
let row1 = [field00, field01, field02]
let row2 = [field10, field11, field12]
let row3 = [field20, field21, field22]

let col1 = [field00, field10, field20,]
let col2 = [field01, field11, field21,]
let col3 = [field02, field12, field22,]

// Diagonal Rows
let dia1 = [field00, field11, field22]
let dia2 = [field20, field11, field02]

const  board = [row1, row2, row3, col1, col2, col3, dia1, dia2];

// Button
const playAgain = document.getElementById('play-again')

playAgain.onclick = function(){
  board.forEach(row => {
    row.forEach(field => {
      field.innerHTML = '[ ]'
    })
  })
  playerX = true;
  playerO = false;
  playerXUI.style.color = 'red';
  playerOUI.style.color = 'black';
}

// Create rules in JS
// Plater X selects field00 
// Field00 changes to X
// Function counts how many Xs are in each row
// Rows to count 3 inline and 2 diagonals
// If the count returns 3 the player wins
// if the counter returns less than 3 Player O takes the turn


let togglePlayerX = function(){
  playerX = false
  playerXUI.style.color = 'black';
  playerO = true
  playerOUI.style.color = 'red';
}

let togglePlayerO = function(){
  playerX = true
  playerXUI.style.color = 'red';
  playerO = false
  playerOUI.style.color = 'black';
}


// Check function
let checkRowX = function(row){
  let counter = 0;
  row.forEach(field => {
   if(field.innerHTML === '[ X ]'){
     counter++
   }
  })
  if(counter >= 3){
    return true;
  } else {
    return false
  };
};

checkBoardX = function(board){
  var boardCheck = board.map(row => {return checkRowX(row)})
  if(boardCheck.indexOf(true) > -1){
    playerXUI.style.color = 'green';
    playerOUI.style.color = 'black';
  }
}

let checkRowO = function(row){
  let counter = 0;
  row.forEach(field => {
   if(field.innerHTML === '[ O ]'){
     counter++
   }
  })
  if(counter >= 3){
    return true;
  } else {
    return false
  };
};


checkBoardO = function(board){
  var boardCheck = board.map(row => {return checkRowO(row)})
  if(boardCheck.indexOf(true) > -1){
    playerOUI.style.color = 'green';
    playerXUI.style.color = 'black';
  }
}

// Get all fields
let fields = document.querySelectorAll('th');

fields.forEach(field => {
  field.onclick = function(event){

    if(playerX){
      event.target.innerHTML = '[ X ]'
      togglePlayerX()
      checkBoardX(board)
    } else if(playerO){
      event.target.innerHTML = '[ O ]'
      togglePlayerO()
      checkBoardO(board)
    }
  }
  })
