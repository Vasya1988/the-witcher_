import {DOMSelectors} from '../../main.js';


export default function() {
    const markupForHomePage = `<!-- Home Page -->
            <div class="home-page">

                <div class="home-page__logo-2 logo-2">
                    <img src="./image/slogan.png" alt="">
                </div>

                <div class="home-page__frame">
                    <div>
                        <h1>Фан-страница сериала Ведьмак</h1>
                    </div>
                    <p>«Ведьмак» — американо-польский фэнтезийный телесериал, снятый по мотивам одноименной серии романов Анджея Сапковского. Премьера сериала состоялась 20 декабря 2019 года на стриминг-сервисе Netflix. 13 ноября 2019 года был официально анонсирован второй сезон, который планируется в 2021 году.</p>
                </div>
            </div>
            <!-- // Home Page -->`

    function renderPage() {
        return new Promise((resolve, reject) => {

            document.getElementById('app').insertAdjacentHTML('afterbegin', markupForHomePage);

            DOMSelectors.navLink.forEach((e) => e.classList.remove('nav_link_active'));
            DOMSelectors.navLink[0].classList.add('nav_link_active');
            resolve();
        })
    }
    
    function animPage() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                document.querySelector('.home-page').style.opacity = 1;
            }, 100);
        })
    }

    async function runStart() {
        await renderPage();
        await animPage();
    }
    runStart()

    

    return markupForHomePage
}
