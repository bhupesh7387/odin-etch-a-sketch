const grid = document.querySelector("#container");

function generateGrid(gridSize) {
    if (gridSize > 100 || gridSize === null || gridSize === "") {
        return;
    }
    grid.innerHTML = "";
    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridDiv = document.createElement("div");
        gridDiv.className = "grid-div";
        gridDiv.style.width = `${800 / gridSize}px`;
        gridDiv.style.height = `${800 / gridSize}px`;
        grid.appendChild(gridDiv);
    }
}

generateGrid(16);

grid.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "black";
});

const girdSizeButton = document.querySelector("#grid-size-btn");
girdSizeButton.addEventListener("click", () => {
    const gridSize = prompt("Enter grid size(Max. 100)");
    generateGrid(gridSize);
});
