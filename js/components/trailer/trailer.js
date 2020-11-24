import {DOMSelectors} from '../../main.js';

export default function() {
    const markupTrailer = `<!-- Trailer -->
    <div class="trailer">
        <div class="trailer__title">
            <h1>Official trailer watch</h1>
        </div>

        <div class="trailer_movie">
            <iframe width="800" height="440" src="https://www.youtube.com/embed/mlO1YaqXLqw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
    <!-- // Trailer -->`;

    DOMSelectors.navLink.forEach((e) => e.classList.remove('nav_link_active'));
    DOMSelectors.navLink[1].classList.add('nav_link_active');

    document.getElementById('app').insertAdjacentHTML('afterbegin', markupTrailer)
}