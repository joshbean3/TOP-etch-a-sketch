const gridContainer = document.querySelector("#gridContainer")

// Create button prompt for user to input number of squares
const btn = document.querySelector("button");
btn.addEventListener("click", function() {
    let user_input;
    do {
    user_input = prompt("How many squares");
    } while (user_input > 100 || isNaN(user_input) || user_input <= 0)
    // Clear container before inserting new one
    gridContainer.textContent = "";
    // Call createGrid function to create grid
    createGrid(user_input);
})

// Loop through necessary number of squares to create. Add eventListenter for mouse
// over 
function createGrid(squares) {
    for (let i=0; i< (squares ** 2); i++) {
        const newDiv = document.createElement("div");
        newDiv.style.border = "1px solid red"
        newDiv.style.height = `${1600 / squares}px`;
        newDiv.style.width = `${1600 / squares}px`;
        newDiv.addEventListener("mouseover", function() {
            // Get random numbers for RGB values
            const random_red = getRandomArbitrary(0,255);
            const random_blue = getRandomArbitrary(0,255);
            const random_green = getRandomArbitrary(0,255);
            // Apply RGB values to background color for squares
            newDiv.style.backgroundColor = `rgb(${random_red},${random_blue},${random_green})`;
        })
        gridContainer.appendChild(newDiv);
    }
}
// get random number between two values 
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
