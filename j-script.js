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
        // Set Div properites in the DOM for each Div
        newDiv.hoverCount = 0;
        newDiv.redColor = 0;
        newDiv.blueColor = 0;
        newDiv.greenColor = 0;
        // Style each Div 
        newDiv.style.border = "1px solid red"
        newDiv.style.height = `${1600 / squares}px`;
        newDiv.style.width = `${1600 / squares}px`;
        // List for hover
        newDiv.addEventListener("mouseover", function() {
            // Count each hover 
            newDiv.hoverCount++;
            // Get random numbers for RGB values only if it is the first hover
            if (newDiv.hoverCount === 1) {
                newDiv.redColor = getRandomArbitrary(0,255);
                newDiv.blueColor = getRandomArbitrary(0,255);
                newDiv.greenColor = getRandomArbitrary(0,255);
            }
            // Apply RGB values to background color for squares. Opacity is increased as a proportion of times hovered.
            newDiv.style.backgroundColor = `rgba(${newDiv.redColor},${newDiv.blueColor},${newDiv.greenColor},${newDiv.hoverCount / 10})`;
        })
        gridContainer.appendChild(newDiv);
    }
}
// get random number between two values 
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
