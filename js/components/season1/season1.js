import {DOMSelectors} from '../../main.js';

export default function() {

    const markupSeason1 = `
        <div class="season1-page">
            <div>
                <p class="season1-page__title">Ссылка ведет на официальную страницу сериала Ведьмак, на сайте Netflix</p>
                <div class="season1-page__logo-netflix">
                    <img src="./image/netflix.png" alt="">
                </div>
                <a target="_blank" class="season1-link" href="https://www.netflix.com/ru/title/80189685">
                    <p></p>
                </a>
            </div>
        </div>`;

        function renderPage() {
            return new Promise((resolve, reject) => {
                DOMSelectors.navLink.forEach((e) => e.classList.remove('nav_link_active'));
                DOMSelectors.navLink[2].classList.add('nav_link_active');
    
                document.getElementById('app').insertAdjacentHTML('afterbegin', markupSeason1);
                resolve();
            })
        }
    
        function animPage() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    document.querySelector('.season1-page').style.opacity = 1;
                }, 100);
            })
        }
    
        async function runStart() {
            await renderPage();
            await animPage();
        }
        runStart();

    


}