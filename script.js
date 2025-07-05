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
    if (e.target.classList.contains("grid-div")) {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        if (!e.target.classList.contains("changed")) {
            e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            e.target.classList.add("changed");
            e.target.style.opacity = 0.1;
        } else {
            let currentOpacity = parseFloat(e.target.style.opacity) || 0;
            if (currentOpacity < 1) {
                e.target.style.opacity = currentOpacity + 0.1;
            }
        }
    }
});

const girdSizeButton = document.querySelector("#grid-size-btn");
girdSizeButton.addEventListener("click", () => {
    const gridSize = prompt("Enter grid size(Max. 100)");
    generateGrid(gridSize);
});
