export default function() {
    const markupAbout = `<div class="about">
    <div class="about__info">
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

document.getElementById('app').insertAdjacentHTML('afterbegin', markupAbout);
}