import foodImage from './food.jpg';
import logoImage from './logo.png';
import './style.css';

export function initialContent(){
    const divContent = document.querySelector('#content');
    const header = document.createElement('div');
    header.classList.add('header');
    const headerLogo = document.createElement('div');
    headerLogo.classList.add('logo');
    const headerContent = new Image();
    headerContent.src = logoImage;
    headerContent.classList.add('image-logo');
    const navBar = document.createElement('div');
    navBar.classList.add('nav-bar');
    const listWrapper = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'Home';
    homeBtn.classList.add('home');
    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu';
    menuBtn.classList.add('menu');
    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'Contact Us';
    contactBtn.classList.add('contact');
    headerLogo.append(headerContent);
    header.append(headerLogo);
    li1.append(homeBtn);
    li2.append(menuBtn);
    li3.append(contactBtn);
    listWrapper.append(li1);
    listWrapper.append(li2);
    listWrapper.append(li3);
    navBar.append(listWrapper);
    header.append(navBar);
    divContent.append(header);


    const main = document.createElement('div');
    main.classList.add('main');
    const mainContentHome = document.createElement('div');
    mainContentHome.classList.add('main-content-home');
    const content1 = document.createElement('p');
    content1.textContent = 'Best padang in the nation!'
    const content2 = document.createElement('p');
    content2.textContent = 'All menu available!'
    const food = new Image();
    food.src = foodImage;
    food.classList.add('food-image-home');
    const content3 = document.createElement('p');
    content3.textContent = 'Order now! What are you waiting for?'
    mainContentHome.append(content1);
    mainContentHome.append(content2);
    mainContentHome.append(food);
    mainContentHome.append(content3);
    main.append(mainContentHome);
    divContent.append(main);


    const footer = document.createElement('div');
    footer.classList.add('footer');
    const footerContent = document.createElement('div');
    footerContent.classList.add('footer-content');
    footerContent.textContent = 'Copyright @averageC0deEnjoyer';
    footer.append(footerContent);
    divContent.append(footer);
}