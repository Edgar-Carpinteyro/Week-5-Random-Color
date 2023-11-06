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
