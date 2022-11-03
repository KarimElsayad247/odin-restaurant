import CupcakeImage from "../images/cupcakes.jpg"

export default function() {
    let content = document.querySelector("#content");

    let header = document.createElement('h1');
    let img = document.createElement('img');
    let about = document.createElement('p');

    header.textContent = "Nice Restaruant"
    img.src = CupcakeImage
    img.width = 400;
    about.textContent = "This restaurant has got the best cupcake ever!";

    content.appendChild(header);
    content.appendChild(img);
    content.appendChild(about);
}