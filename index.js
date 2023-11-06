//P: Function attached to a button, array of color values (hexidecimals), Math.random

//R: Return andicince in our array of given color values, replace the bcjground with that value.

// E: array[1] = #FF5733, so that background color should change to #FF5733

//P: We're going to write a function that will grabd a random style.background color, use the property style.background color on our background element (body). All the reassignments of the background should happen in an eventListener attached to the button




// const button = document.createElement("button");

// document.body.appendChild(button);
// button.textContent = "Cick Here";

// button.addEventListener("click", writeMesssage);

// function writeMesssage() {
//     const randomColor = Math.floor(Math.random() * 16777215);
//     const backgroundColor = document.body.style.backgroundColor = randomColor;
//     return document.body.appendChild(backgroundColor);
// }

//Class Code

const colors = ["#d89f03", "#120c55", "#131e29", "#5ca396", "#fe0957", "#b78bea"];

function getRandomColorIndex() {
    return Math.floor(Math.random() * colors.length);

}

const colorButton = document.getElementById("colorButton");

colorButton.addEventListener("click", function(){
    const randomIndex = getRandomColorIndex();

    const randomColor = colors[randomIndex];

    document.body.style.backgroundColor = randomColor;
})