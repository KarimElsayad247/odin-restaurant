import Home from './modules/home';
import Contact from './modules/contact';
import Menu from './modules/menu'

import './styles/main.css'

function switchTab(event) {
    console.log(event.target.dataset.page)
}

const HeaderButton = target => {
    let button = document.createElement('button');
    button.textContent = target
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




