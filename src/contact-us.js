import mapsImage from './maps.jpg';
import logoImage from './logo.png';

export function contactContent(){
    const divContent = document.querySelector('#content');


    const main = document.createElement('div');
    main.classList.add('main');
    const mainContentContact = document.createElement('div');
    mainContentContact.classList.add('main-content-contact-us');
    const mapsImg = new Image();
    mapsImg.src = mapsImage;
    mapsImg.classList.add('contact-us');
    mainContentContact.append(mapsImg);
    main.append(mainContentContact);
    divContent.append(main);


    const footer = document.createElement('div');
    footer.classList.add('footer');
    const footerContent = document.createElement('div');
    footerContent.classList.add('footer-content');
    footerContent.textContent = 'Copyright';
    footer.append(footerContent);
    divContent.append(footer);

}