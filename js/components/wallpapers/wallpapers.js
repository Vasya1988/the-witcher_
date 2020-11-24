import {DOMSelectors} from '../../main.js';

export default function() {
    const markupWallpapers = `<div class="wallpapers">
    <div class="wallpapers-frame">
        <!-- <div class="images-frame-pic">
            <img src="" alt="">
        </div> -->
  
    </div>
</div>`;

    DOMSelectors.navLink.forEach((e) => e.classList.remove('nav_link_active'));
    DOMSelectors.navLink[4].classList.add('nav_link_active');

    document.getElementById('app').insertAdjacentHTML('afterbegin', markupWallpapers)
}


