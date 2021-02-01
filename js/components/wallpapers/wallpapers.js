import {DOMSelectors, wallpapersCard} from '../../main.js';

export default function() {
    
const markupWallpapers = `<div class="wallpapers-page">

    </div>`;

    function renderPage() {
        return new Promise((resolve, reject) => {
            DOMSelectors.navLink.forEach((e) => e.classList.remove('nav_link_active'));
            DOMSelectors.navLink[4].classList.add('nav_link_active');

            document.getElementById('app').insertAdjacentHTML('afterbegin', markupWallpapers);
            
            wallpapersCard.forEach((item) => {
                document.querySelector('.wallpapers-page').insertAdjacentHTML('afterbegin', `<img src="${item.adress}" alt=""></img>`)
            });
            resolve();
        })
    };

    function animPage() {
        return new Promise((resolve, reject) => {
            document.querySelector('.wallpapers-page').style.opacity = 1;
            resolve();
        });
        
    };

    async function runStart() {
        await renderPage();
        await setTimeout(animPage, 50);
    };

    runStart();
}


