import {DOMSelectors} from '../../main.js';


export default function() {
    const markupAbout = `<div class="about-page">
    <div class="about-page__info">
        <p>
            Всем привет! <br>
            Спасибо, что зашли на мой сайт и добрались до этой вкладки. <br>
            Это мой тестовый сайт, я его сделал для портфолио, т.к. в будущем хочу стать фронтенд разработчкиом
        </p>
    </div>
    
    <div class="social_icon">

        <a href="https://vk.com/id640146">
            <i class="fab fa-vk" aria-hidden="true"></i>
        </a>

        <a href="https://www.facebook.com/profile.php?id=100001263317483">
            <i class="fab fa-facebook-square" aria-hidden="true"></i>
        </a>

        <a href="https://www.instagram.com/vasiliy_romanov_88/">
            <i class="fab fa-instagram" aria-hidden="true"></i>
        </a>

        <a href="https://vimeo.com/vasya88">
            <i class="fab fa-vimeo" aria-hidden="true"></i>
        </a>

    </div>
</div>`;

    function renderPage() {
        return new Promise((resolve, reject) => {
            DOMSelectors.navLink.forEach((e) => e.classList.remove('nav_link_active'));
            DOMSelectors.navLink[5].classList.add('nav_link_active');

            document.getElementById('app').insertAdjacentHTML('afterbegin', markupAbout);
            resolve();
        })
    };

    function animPage() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                document.querySelector('.about-page').style.opacity = 1;
            }, 100);
        })
    }

    async function runStart() {
        await renderPage();
        await animPage();
    }
    runStart();
    
}