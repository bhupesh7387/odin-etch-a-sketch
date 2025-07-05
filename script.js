const grid = document.querySelector("#container");

for (let i = 0; i < 16 * 16; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.className = "grid-div";
    grid.appendChild(gridDiv);
}

grid.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "black";
});
