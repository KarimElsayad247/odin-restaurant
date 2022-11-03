import Home from './modules/home';
import Menu from './modules/menu'
import Contact from './modules/contact';

import './styles/main.css'

function switchTab(event) {
    console.log(event.target.dataset.page);
    let content = document.querySelector("#content");
    
    let headerButtons = document.getElementsByClassName('header-button');
    for (let button of headerButtons) {
        button.classList.remove('active');
    } 

    event.target.classList.add('active');

    switch (event.target.dataset.page) {
        case "home":
            content.replaceChildren(Home());
            break;
        case "menu":
            content.replaceChildren(Menu());
            break;
        case "contact":
            content.replaceChildren(Contact());
            break;
        default:
            break;
    }
}

const HeaderButton = target => {
    let button = document.createElement('button');
    button.textContent = target
    button.id = target
    button.dataset.page = target
    button.addEventListener('click', switchTab);
    button.classList.add('header-button');
    return button;
}

const Header = () => {
    let header = document.createElement('header');
    
    const neededButtons = ['home', 'menu', 'contact'];
    const headerButtons = neededButtons.map(target => HeaderButton(target));

    header.replaceChildren(...headerButtons);

    return header;
}

let body = document.querySelector('body');
body.insertBefore(Header(), body.firstChild);

document.querySelector("#home").click();