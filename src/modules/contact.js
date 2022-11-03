export default function() {
    let section = document.createElement('section');
    section.classList.add('contact');

    let title = document.createElement('h2');
    title.textContent = 'Contact us';
    
    let phoneHeader = document.createElement('h3');
    phoneHeader.textContent = 'Phone'

    let phone1 = document.createElement('p');
    phone1.textContent = "123-456-789"

    let emailHeader = document.createElement('h3');
    emailHeader.textContent = 'Email'

    let email1 = document.createElement('p');
    email1.textContent = "mail@example.com"

    section.appendChild(title);
    section.appendChild(phoneHeader);
    section.appendChild(phone1);
    section.appendChild(emailHeader);
    section.appendChild(email1);
    
    return section;
}