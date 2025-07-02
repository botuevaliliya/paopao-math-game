const board = document.getElementById("game-board");

for (let i = 0; i < 100; i++) {
  const tile = document.createElement("div");
  tile.className = "tile";
  tile.textContent = Math.floor(Math.random() * 10); // random tile type
  board.appendChild(tile);
}
