import CupcakeImage from '../images/cupcakes.jpg'

export default function() {
    let home = document.createElement('home');

    let header = document.createElement('h1');
    let img = document.createElement('img');
    let about = document.createElement('p');

    header.textContent = "Nice Restaruant"
    img.src = CupcakeImage
    img.width = 400;
    about.textContent = "This restaurant has got the best cupcake ever!";

    home.appendChild(header);
    home.appendChild(img);
    home.appendChild(about);

    return home;
}