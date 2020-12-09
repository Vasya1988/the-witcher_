import * as main from '../main.js';


export default function() {

    let moveLeft = main.moveLeft;
    
    // Рендер скриншотов
    main.screenShots.forEach((pic, index) => {
        let markupScreenShot = `<img class="images-frame-pic" src="${pic.adress}"alt="">`;
        let markupBigScreenshot = `<div class="screenshot-frame">
                            <a href="#" class="arrow-back" >Back</a>
                            <img data-bigScreenshot class="big-screenshot" src="${pic.adress}" alt="">
                            <a href="#" class="arrow-forward" >Forward</a>
                        </div>`;

        // Добавляем скриншоты на страницу
        main.DOMSelectors.screenShot.insertAdjacentHTML('afterbegin', markupScreenShot);

        // Увеличенное изображение
        main.DOMSelectors.screenShot.firstChild.addEventListener('click', (e) => {
            document.body.insertAdjacentHTML('afterbegin', markupBigScreenshot);
            document.body.firstChild.addEventListener('click', (del) => {
                document.body.firstChild.remove();
            })
        })

    })

    // Листать скриншоты
    main.DOMSelectors.buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            
            if (button.classList.value.split(' ')[1] === 'btn-back') {
                // 160 (ширина картинки), умножаем на 25 (кол-во картинок)
                // получаем 4000 из них вычитаем 4 картинки это будет 640 (160*4=640)
                // Получаем конечную длину фрейма с картинками, после которого движение невозможно
                const end = `-${(160 * 25) - (160 * 4)}`;
                if (moveLeft > end ) {
                    main.DOMSelectors.moveFrame.style.left = `${moveLeft = moveLeft - 80}px`;
                } else {
                    main.DOMSelectors.moveFrame.style.left = `${moveLeft = moveLeft - 20}px`;
                    setTimeout(() => {
                        main.DOMSelectors.moveFrame.style.left = `${moveLeft = moveLeft + 20}px`;
                    }, 80)
                }
            } else if (button.classList.value.split(' ')[1] === 'btn-forward') {
                if (moveLeft != 0) {
                    main.DOMSelectors.moveFrame.style.left = `${moveLeft = moveLeft + 80}px`;
                } else {
                    main.DOMSelectors.moveFrame.style.left = `${moveLeft = moveLeft + 20}px`;
                    setTimeout(() => {
                        main.DOMSelectors.moveFrame.style.left = `${moveLeft = moveLeft - 20}px`;
                    }, 80)
                }
            }
        })
    });


    
}