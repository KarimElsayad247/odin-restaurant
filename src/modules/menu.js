import CupcakeImage from '../images/cupcakes.jpg'

const menuItemsArray = [
    {
        title: "Cupcakes",
        description: "really delicious",
        image: CupcakeImage,
    },
    {
        title: "Cupcakes",
        description: "really delicious",
        image: CupcakeImage,
    },
]

const MenuItem = ({title, description, image}) => {
    let card = document.createElement('div');
    card.classList.add('menu-item');
    
    let cardContent = document.createElement('div');
    cardContent.classList.add('menu-text');

    let titleElem = document.createElement('h3')
    titleElem.textContent = title;

    let descElem = document.createElement('p');
    descElem.textContent = description;

    let imgElem = document.createElement('img')
    imgElem.src = image;

    cardContent.appendChild(titleElem);
    cardContent.appendChild(descElem);

    card.appendChild(imgElem);
    card.appendChild(cardContent);

    return card;
}

export default function() {
    
    let section = document.createElement('section');
    section.classList.add('menu');

    let title = document.createElement('h2');
    title.textContent = 'Menu'
    
    section.appendChild(title);

    for (let menuItem of menuItemsArray) {
        section.appendChild(MenuItem(menuItem));
    }

    return section;
}