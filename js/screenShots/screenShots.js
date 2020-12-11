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

        // let arrowBack = document.querySelector('arrow-back'),
        //     arrowFowrward = document.querySelector('.arrow-forward');

        // Добавляем скриншоты на страницу
        main.DOMSelectors.screenShot.insertAdjacentHTML('afterbegin', markupScreenShot);

        

        function fuck() {
            let arrowBack = document.querySelector('.arrow-back');
            let arrowForward = document.querySelector('.arrow-forward');

            yy(arrowBack, arrowForward, index)
            
            console.log(arrowBack, arrowForward)
        }

        // Увеличенное изображение
        main.DOMSelectors.screenShot.firstChild.addEventListener('click', async (e) => {
            function one() {
                return new Promise((resolve, reject) => {
                    document.body.insertAdjacentHTML('afterbegin', markupBigScreenshot);
                    console.log('Нынешний индекс', index)
                    resolve();
                })
            }
            
            async function foo2() {
                await one();
                await setTimeout(fuck, 500);
            }
            foo2()

            
            
            document.body.firstChild.addEventListener('click', (del) => {
                // console.log('тут индекс',index);
                document.body.firstChild.remove();
            })
        });

        function yy(one, two, index) {
            one.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                if (index >= 24) {
                    index = 0 - 1;
                } else if (index <= -1) {
                    index = 24;
                }

                document.querySelector('[data-bigscreenshot]').src = `${main.screenShots[index = index + 1].adress}`;
                console.log('Листаем назад', index);
            });

            two.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                document.querySelector('[data-bigscreenshot]').src = `${main.screenShots[index--].adress}`;
                console.log('Листаем вперед', index);
            });

        }


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


    function foo() {
        main.DOMSelectors.arrowBack.addEventListener('click', (e) => {
            e.preventDefault();
        })
    }
}