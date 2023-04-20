const container = document.querySelector(".container");
renderGrid(16, 16);

function renderGrid(height, width) {
    for (let i = 0; i < width; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < height; j++) {
            let newBox = document.createElement("div");
            newBox.classList.add("cell");
            row.appendChild(newBox);
        }
        container.appendChild(row);
    }
}