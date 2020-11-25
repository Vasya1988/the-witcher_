import {DOMSelectors} from '../../main.js';

export default function() {
    const markupTrailer = `<!-- Trailer-page -->
    <div class="trailer-page">
        <div class="trailer-page__title">
            <h1>Official trailer-page watch</h1>
        </div>

        <div class="trailer-page_movie">
            <iframe width="800" height="440" src="https://www.youtube.com/embed/mlO1YaqXLqw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
    <!-- // Trailer-page -->`;

    function renderPage() {
        return new Promise((resolve, reject) => {
            DOMSelectors.navLink.forEach((e) => e.classList.remove('nav_link_active'));
            DOMSelectors.navLink[1].classList.add('nav_link_active');

            document.getElementById('app').insertAdjacentHTML('afterbegin', markupTrailer);
            resolve();
        })
    };

    function animPage() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                document.querySelector('.trailer-page').style.opacity = 1;
            }, 100);
        })
    };

    async function runStart() {
        await renderPage();
        await animPage();
    }
    runStart();
}