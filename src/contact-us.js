// import mapsImage from './maps.jpg';
import downloadImage from './download.jpeg'

export function contactContent(){
    const divContent = document.querySelector('#content');


    const main = document.createElement('div');
    main.classList.add('main');
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
    divContent.append(main);


    const footer = document.createElement('div');
    footer.classList.add('footer');
    const footerContent = document.createElement('div');
    footerContent.classList.add('footer-content');
    footerContent.textContent = 'Copyright @averageC0deEnjoyer';
    footer.append(footerContent);
    divContent.append(footer);

}