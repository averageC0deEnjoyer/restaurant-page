import rendangImage from './rendang.jpeg';
import gulaiImage from './gulai.jpeg';
import fishImage from './fish.jpeg';
import riceImage from './rice.jpeg';
export function menuContent(){
    const divContent = document.querySelector('#content');

    const main = document.createElement('div');
    main.classList.add('main');
    const mainContentMenu = document.createElement('div');
    mainContentMenu.classList.add('main-content-menu');
    const menuDescription = document.createElement('div');
    menuDescription.classList.add('menu-description');
    const rendangImg = new Image();
    rendangImg.src = rendangImage;
    rendangImg.classList.add('food-image-menu');
    const imageTitle = document.createElement('h2');
    imageTitle.textContent = 'Rendang';
    const imageDescription = document.createElement('p');
    imageDescription.textContent = 'Empuk Bos!'
    const menu2Description = document.createElement('div');
    menu2Description.classList.add('menu-description');
    const gulaiImg = new Image();
    gulaiImg.src = gulaiImage;
    gulaiImg.classList.add('food-image-menu');
    const image2Title = document.createElement('h2');
    image2Title.textContent = 'Gulai Beef';
    const image2Description = document.createElement('p');
    image2Description.textContent = 'Very Tasty!'
    const menu3Description = document.createElement('div');
    menu3Description.classList.add('menu-description');
    const fishImg = new Image();
    fishImg.src = fishImage;
    fishImg.classList.add('food-image-menu');
    const image3Title = document.createElement('h2');
    image3Title.textContent = 'Gulai Fish';
    const image3Description = document.createElement('p');
    image3Description.textContent = 'Very Fishy!'

    const menu4Description = document.createElement('div');
    menu4Description.classList.add('menu-description');
    const riceImg = new Image();
    riceImg.src = riceImage;
    riceImg.classList.add('food-image-menu');
    const image4Title = document.createElement('h2');
    image4Title.textContent = 'De Rice';
    const image4Description = document.createElement('p');
    image4Description.textContent = 'Hot Rice!'

    menuDescription.append(rendangImg);
    menuDescription.append(imageTitle);
    menuDescription.append(imageDescription);
    menu2Description.append(gulaiImg);
    menu2Description.append(image2Title);
    menu2Description.append(image2Description);
    menu3Description.append(fishImg);
    menu3Description.append(image3Title);
    menu3Description.append(image3Description);
    menu4Description.append(riceImg);
    menu4Description.append(image4Title);
    menu4Description.append(image4Description);
    mainContentMenu.append(menuDescription);
    mainContentMenu.append(menu2Description);
    mainContentMenu.append(menu3Description);
    mainContentMenu.append(menu4Description);
    main.append(mainContentMenu);
    divContent.append(main);


    const footer = document.createElement('div');
    footer.classList.add('footer');
    const footerContent = document.createElement('div');
    footerContent.classList.add('footer-content');
    footerContent.textContent = 'Copyright @averageC0deEnjoyer';
    footer.append(footerContent);
    divContent.append(footer);

}