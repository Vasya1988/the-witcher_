import {DOMSelectors} from '../../main.js';

export default function() {


    DOMSelectors.navLink.forEach((e) => e.classList.remove('nav_link_active'));
    DOMSelectors.navLink[2].classList.add('nav_link_active');
}