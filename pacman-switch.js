var ghost = 'Blinky';
var colour;

switch (ghost) {
    case 'Inky':
        colour = 'Cyan';
        break;
    case 'Blinky':
        colour = 'Red';
        break;
    case 'Pinky':
        colour = 'Pink';
        break;
    case 'Clyde':
        colour = 'Orange';
        break;
}

console.log(`${ghost} is the colour ${colour}`);


// Named function
function eatDot() {
    console.log("MUNCH!");
}

// Anonymous function
// Here we assign the function to a variable instead of giving it a name directly
var eatDot = function() {
    console.log("MUNCH!");
}

// Arrow function (also anonymous)
var eatDot = () => {
    console.log("MUNCH!");
}

eatDot();