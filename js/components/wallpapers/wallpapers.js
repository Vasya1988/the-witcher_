import {DOMSelectors} from '../../main.js';

export default function() {
    const markupWallpapers = `<div class="wallpapers">
    <div class="wallpapers-frame">
        <!-- <div class="images-frame-pic">
            <img src="" alt="">
        </div> -->
  
    </div>
</div>`;

    function renderPage() {
        return new Promise((resolve, reject) => {
            DOMSelectors.navLink.forEach((e) => e.classList.remove('nav_link_active'));
            DOMSelectors.navLink[4].classList.add('nav_link_active');

            document.getElementById('app').insertAdjacentHTML('afterbegin', markupWallpapers);
            resolve();
        })
    };

    function animPage() {
        return new Promise((resolve, reject) => {
            document.querySelector('.wallpapers-page').style.opacity = 1;
        })
    };

    async function runStart() {
        await renderPage();
        await animPage();
    };

    runStart();
}


