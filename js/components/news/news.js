import {DOMSelectors} from '../../main.js';

export default function() {
    const markupNews = `
    <div class="news-page">
        <div class="news-page__title">
            <h1>Съемки второго сезона "Ведьмака" остановлены</h1>
        </div>

        <div class="news-page__info">
            <div class="news-page__info-picture">
                <img src="./image/News_picture/news.jpg" alt="">
                <div class="news-page__info-text">
                <p>
                    Потоковый сервис Netflix остановил съемки второго сезона сериала "Ведьмак". По сведениям издания Variety, произошло это после того, как у четырех членов съемочной группы был диагностирован коронавирус нового типа. Утверждается, что они находятся в изоляции, а все остальные должны пройти соответствующие тесты. Кто именно заболел, не уточняется.

                    Второй сезон “Ведьмака” снимался на студии Arborfield Studios, которая находится к западу от Лондона. Netflix возобновит работу над проектом, как только специалисты определят, что это безопасно.

                    Отметим, что производство “Ведьмака” также было остановлено еще в марте 2020 года, когда тест актера Кристофер Хивью, который играет Нивеллена, дал положительный результат. Шоу не возвращалось к производству до середины августа, в соответствии с британскими протоколами безопасности на съемочных площадках.

                    Ранее считалось, что съемки второго сезона продолжатся до февраля 2021 года. Повлияет ли последняя остановка на этот график, пока неизвестно. Главную роль исполняет британский актер Генри Кавилл.
                    <span>
                            <br>
                            Андрей Воронцов
                            <br>
                            Источник: Variety
                    </span>
                </p>
            </div>
            </div>

            
        </div>

    </div>`;

    function renderPage() {
        return new Promise((resolve, reject) => {
            DOMSelectors.navLink.forEach((e) => e.classList.remove('nav_link_active'));
            DOMSelectors.navLink[3].classList.add('nav_link_active');

            document.getElementById('app').insertAdjacentHTML('afterbegin', markupNews);
            resolve();
        })
    }

    function animPage() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                document.querySelector('.news-page').style.opacity = 1;
            }, 100);
        })
    }

    async function runStart() {
        await renderPage();
        await animPage();
    }
    runStart();
}