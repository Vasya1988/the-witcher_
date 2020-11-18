const DOMSelectors = {
    screenShot: document.querySelector('.images-frame div')
    // screenShot: document.querySelectorAll('.images-frame-pic')
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

let markupScreenShot = `<img class="images-frame-pic" src="" alt="">`

function foo() {
    DOMSelectors.screenShot[0].innerHTML = markupScreenShot;
}
// foo()

function viewScreenShots() {
    screenShots.forEach((pic, index) => {
        let newTag = document.createElement('img');
        newTag.classList.add('images-frame-pic');
        newTag.src = `${pic.adress}`
        DOMSelectors.screenShot.appendChild(newTag);

        
        // innerHTML = `<img class="images-frame-pic" src="${pic.adress}" alt="">`
    })
}
viewScreenShots()
