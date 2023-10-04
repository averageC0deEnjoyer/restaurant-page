// import mapsImage from './maps.jpg';
import downloadImage from './download.jpeg'

export function contactContent(){
    const main = document.querySelector('.main');
    const mainContentContact = document.createElement('div');
    mainContentContact.classList.add('main-content-contact-us');
    const catImg = new Image();
    catImg.src = downloadImage;
    catImg.classList.add('contact-us');
    const imageDesc = document.createElement('h3');
    imageDesc.textContent = 'Why eat if you will get hungry again';
    mainContentContact.append(catImg);
    mainContentContact.append(imageDesc);
    main.append(mainContentContact);
}