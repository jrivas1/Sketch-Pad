//Globals


const container = document.querySelector(".container");
const sizeButton = document.querySelector("#sizeButton");
renderGrid(16);

function renderGrid(size) {
    if (!Number.isInteger(size) || size > 100 || size < 1) {
        console.warn(`Invalid size! Inputs: ${size}`)
        return;
    }
    let rows = [];
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < size; j++) {
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
    let size = prompt("Size?");
    renderGrid(+size);
})