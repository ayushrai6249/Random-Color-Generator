let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let randomColor = getRandomColor();
    let h1 = document.querySelector('h1');
    h1.innerText = randomColor;
    
    let colorSpan = document.querySelector('span');
    colorSpan.style.background = randomColor;

    let p = document.querySelector('p');
    p.innerText = "";

    let button = document.querySelector('button');
    button.innerText = "Generate again";
    button.style.width = '150px';

    // alert('Color Generated');
})

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green} , ${blue})`;
    return color;
}

