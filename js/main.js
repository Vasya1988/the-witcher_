import homePage from './components/home_page/homePage.js';
import trailer from './components/trailer/trailer.js';
import news from './components/news/news.js';
import about from './components/about/about.js';
import wallpapers from './components/wallpapers/wallpapers.js';
import season1 from './components/season1/season1.js';

export const DOMSelectors = {
    screenShot: document.querySelector('.images-frame div'),
    navLink: document.querySelectorAll('.nav_link'),
    buttonBack: document.querySelector('.btn-back'),
    buttonforward: document.querySelector('.btn-forward'),
    buttons: document.querySelectorAll('.btn'),
    moveFrame: document.querySelector('.images-frame div'),
    mobMenu: document.querySelector('.header__nav-menu-top p'),
    mobMenuDisplay: document.querySelector('.header__nav-menu-top ul'),
    screenshotImages: document.querySelectorAll('.images-frame-pic')
};

const screenShots = [
    {
        number: 1,
        adress: "./image/screenshots/1.jpg"
    },

    {
        number: 2,
        adress: "./image/screenshots/2.jpg"
    },

    {
        number: 3,
        adress: "./image/screenshots/3.jpg"
    },

    {
        number: 4,
        adress: "./image/screenshots/4.jpg"
    },

    {
        number: 5,
        adress: "./image/screenshots/5.jpg"
    },

    {
        number: 6,
        adress: "./image/screenshots/6.jpg"
    },

    {
        number: 7,
        adress: "./image/screenshots/7.jpg"
    },

    {
        number: 8,
        adress: "./image/screenshots/8.jpg"
    },

    {
        number: 9,
        adress: "./image/screenshots/9.jpg"
    },

    {
        number: 10,
        adress: "./image/screenshots/10.jpg"
    },

    {
        number: 11,
        adress: "./image/screenshots/11.jpg"
    },

    {
        number: 12,
        adress: "./image/screenshots/12.jpg"
    },

    {
        number: 13,
        adress: "./image/screenshots/13.jpg"
    },

    {
        number: 14,
        adress: "./image/screenshots/14.jpg"
    },

    {
        number: 15,
        adress: "./image/screenshots/15.jpg"
    },

    {
        number: 16,
        adress: "./image/screenshots/16.jpg"
    },
    
    {
        number: 17,
        adress: "./image/screenshots/17.jpg"
    },

    {
        number: 18,
        adress: "./image/screenshots/18.jpg"
    },

    {
        number: 19,
        adress: "./image/screenshots/19.jpg"
    },

    {
        number: 20,
        adress: "./image/screenshots/20.jpg"
    },

    {
        number: 21,
        adress: "./image/screenshots/21.jpg"
    },

    {
        number: 22,
        adress: "./image/screenshots/22.jpg"
    },

    {
        number: 23,
        adress: "./image/screenshots/23.jpg"
    },

    {
        number: 24,
        adress: "./image/screenshots/24.jpg"
    },

    {
        number: 25,
        adress: "./image/screenshots/25.jpg"
    },

];

const routes = [
    {
        path: '#',
        component: homePage
    },
    {
        path: 'trailer',
        component: trailer
    },
    {
        path: 'season1',
        component: season1
    },
    {
        path: 'news',
        component: news
    },
    {
        path: 'about',
        component: about
    },
    {
        path: 'wallpapers',
        component: wallpapers
    }
    
];

let moveLeft = 0;

// Рендер страницы приложения
function render() {
    const pathArray = location.hash.split('/')[1];
    let delPage = document.getElementById('app');

    if (location.hash.split('/')[0] === '') {
        delPage.innerHTML = '';
        routes[0].component();
    };

    const pathRoute = routes.find((e) => {
        if (e.path === pathArray) {
            
            delPage.innerHTML = '';
            return e.component()
        }
    });
}

// Кнопка мобильного меню
DOMSelectors.mobMenu.addEventListener('click', (e) => {
    if (DOMSelectors.mobMenuDisplay.style.display != 'block') {
        DOMSelectors.mobMenuDisplay.style.display = 'block';
        DOMSelectors.mobMenuDisplay.querySelectorAll('li')
        console.log('work');
        console.dir(DOMSelectors.mobMenuDisplay.querySelector('li'));

    } else {
        DOMSelectors.mobMenuDisplay.style.display = 'none';
        console.log('done')
    }
})

// Рендер скриншотов
screenShots.forEach((pic, index) => {
    let markupScreenShot = `<img class="images-frame-pic" src="${pic.adress}"alt="">`;
    let markupBigScreenshot = `<div class="screenshot-frame">
                        <a href="#" class="arrow-back" >Back</a>
                        <img data-bigScreenshot class="big-screenshot" src="${pic.adress}" alt="">
                        <a href="#" class="arrow-forward" >Forward</a>
                    </div>`;


    DOMSelectors.screenShot.insertAdjacentHTML('afterbegin', markupScreenShot);

    DOMSelectors.screenShot.firstChild.addEventListener('click', (e) => {
        console.log('work');
        
        document.body.insertAdjacentHTML('afterbegin', markupBigScreenshot);
        document.body.firstChild.addEventListener('click', (del) => {
            document.body.firstChild.remove();
        })
    })

})

// function bigScreenImg() {
//     console.log(DOMSelectors.screenshotImages);
    
// }
// bigScreenImg()


// Листать скриншоты
DOMSelectors.buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        
        if (button.classList.value.split(' ')[1] === 'btn-back') {
            // 160 (ширина картинки), умножаем на 25 (кол-во картинок)
            // получаем 4000 из них вычитаем 4 картинки это будет 640 (160*4=640)
            // Получаем конечную длину фрейма с картинками, после которого движение невозможно
            const end = `-${(160 * 25) - (160 * 4)}`;
            if (moveLeft > end ) {
                DOMSelectors.moveFrame.style.left = `${moveLeft = moveLeft - 80}px`;
            } else {
                DOMSelectors.moveFrame.style.left = `${moveLeft = moveLeft - 20}px`;
                setTimeout(() => {
                    DOMSelectors.moveFrame.style.left = `${moveLeft = moveLeft + 20}px`;
                }, 80)
            }
        } else if (button.classList.value.split(' ')[1] === 'btn-forward') {
            if (moveLeft != 0) {
                DOMSelectors.moveFrame.style.left = `${moveLeft = moveLeft + 80}px`;
            } else {
                DOMSelectors.moveFrame.style.left = `${moveLeft = moveLeft + 20}px`;
                setTimeout(() => {
                    DOMSelectors.moveFrame.style.left = `${moveLeft = moveLeft - 20}px`;
                }, 80)
            }
        }
    })
})

// Отображение активной вкладки в нав баре
DOMSelectors.navLink.forEach((activeClass) => {




    // activeClass.addEventListener('click', (e) => {

    //     // Удаляем все активные классы
    //     Array.from(DOMSelectors.navLink).find((e)=> e.classList.remove('nav_link_active'))

    //     // Добавляем текущей вкладке активный класс
    //     activeClass.classList.add('nav_link_active');
    // })
});

// Запуск роутера, когда изменился hashchange
window.addEventListener('hashchange', render);
// Запуск при загрузке страницы
window.addEventListener('load', render);

