//Globals


const container = document.querySelector(".container");
const sizeButton = document.querySelector("#sizeButton");
renderGrid(16, 16);

function renderGrid(height, width) {
    if (!Number.isInteger(height) || !Number.isInteger(width)) {
        console.warn(`Invalid height and width! Inputs: ${width}, ${height}`)
        return;
    }
    let rows = [];
    for (let i = 0; i < width; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < height; j++) {
            let newBox = document.createElement("div");
            newBox.classList.add("cell");
            row.appendChild(newBox);
        }
        rows.push(row);
    }
    container.replaceChildren(...rows);
}

function paintCell(e) {
    if (e.target.classList.contains("cell")){
        e.target.classList.add("painted");
    }
    e.preventDefault();
}

container.addEventListener("mousedown", e => {
    paintCell(e);
    container.addEventListener("mouseover", paintCell);
});

container.addEventListener("mouseup", e => {
    container.removeEventListener("mouseover", paintCell);
});
container.addEventListener("mouseleave", e => {
    container.removeEventListener("mouseover", paintCell);
});

sizeButton.addEventListener("click", () => {
    let width = prompt("Width?");
    let height = prompt("Height?");
    renderGrid(width, height);
})