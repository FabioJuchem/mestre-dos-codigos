window.location = "#wall-1";

var position = 0;

var files = [
    {
        file: "Primeira Imagem",
        url: "./img/AbnerLaura-1.jpg",
        class: "first"
    },
    {
        file: "Segunda Imagem",
        url: "./img/AbnerLaura-2.jpg",
        class: "second"
    },
    {
        file: "Terceira Imagem",
        url: "./img/AbnerLaura-3.jpg",
        class: "third"
    },
    {
        file: "Quarta Imagem",
        url: "./img/AbnerLaura-4.jpg",
        class: "fourth"
    },
    {
        file: "Quinta Imagem",
        url: "./img/AbnerLaura-5.jpg",
        class: "fifth"
    },
    {
        file: "Sexta Imagem",
        url: "./img/AbnerLaura-6.jpg",
        class: "sixth"
    },
    {
        file: "Sétima Imagem",
        url: "./img/AbnerLaura-7.jpg",
        class: "seventh"
    },
    {
        file: "Oitava Imagem",
        url: "./img/AbnerLaura-8.jpg",
        class: "eighth"
    },
    {
        file: "Nona Imagem",
        url: "./img/AbnerLaura-9.jpg",
        class: "ninth"
    },
    {
        file: "Decima Imagem",
        url: "./img/AbnerLaura-10.jpg",
        class: "tenth"
    },

]

var previousClass = 'first';

function create() {
    const div = document.querySelector('.carousel-items');
    this.files.forEach((item) => {
        const tags =`<div class="carousel__item" id="slider">
                          <img class="carousel__img"
                          src="${item.url}" alt="" height="200" width="300">
                        </div>`
        const element = document.createElement('div');
        element.innerHTML = tags;
        element.addEventListener('click', () => this.selectImg(item.class))
        div.appendChild(element)
    })
}

function next() {
    if (this.position !== this.files.length) {
        this.position += 1;
        this.removePreviousClass(this.position -1);
    }
    this.addClass();
    this.addTitle();
}

function previous() {
    if (this.position !== 0) {
        this.position -= 1;
        this.removePreviousClass(this.position +1);
    }
    this.addClass();
    this.addTitle();
}

function addClass() {
    var body = document.querySelector('.body');
    var newClass = this.files[this.position].class;
    body.classList.add(`${newClass}`);
    this.previousClass = newClass;
}

function removePreviousClass() {
    var body = document.querySelector('.body');
    body.classList.remove(`${this.previousClass}`);
}

function addTitle() {
    var title = document.querySelector('content__title');
    title.textContent = `${this.files[this.position].file}`;
}

function selectImg(newClass) {
    var body = document.querySelector('.body');
    body.classList.add(`${newClass}`);
    this.removePreviousClass();
    this.previousClass = newClass;
}
