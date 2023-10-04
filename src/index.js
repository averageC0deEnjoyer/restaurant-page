import './style.css';
import { homeContent } from './home.js' 
import { menuContent } from './menu.js' 
import { contactContent } from './contact-us.js' 
import { initialContent } from './initial-content.js'

initialContent(); //dont put header inside mainbody. because event listener wont work if you rerender the button

let mainContent = document.querySelector('.main');

let homeBtn = document.querySelector('.home')
homeBtn.addEventListener('click', () => {
    while (mainContent.hasChildNodes()) {
        mainContent.removeChild(mainContent.firstChild);
      };
    homeContent();
    }
);

let menuBtn = document.querySelector('.menu')
menuBtn.addEventListener('click', () => {
    while (mainContent.hasChildNodes()) {
        mainContent.removeChild(mainContent.firstChild);
      }
    menuContent();
    }
);

let contactBtn = document.querySelector('.contact')
contactBtn.addEventListener('click', () => {
    while (mainContent.hasChildNodes()) {
        mainContent.removeChild(mainContent.firstChild);
      }
    contactContent();
    }   
);

