const mainBoard = function () {
  const mainBoardDiv = document.querySelector(".bingo-board");
  for (let bingoboardcells= 0; bingoboardcells < 76; bingoboardcells++) {
    mainBoardDiv.innerHTML += `<div class= 'board-cell'>${bingoboardcells + 1}</div>`;
  }
};
const bingoButton = function (randomNumber) {
  const randomNumber = Math.floor((Math.random() * 76) + 1)
}





window.onload = function () {
  mainBoard();
};
