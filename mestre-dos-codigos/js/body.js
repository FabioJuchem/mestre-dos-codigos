window.location = "#wall-1";

var position = 0;

var files = [
    {
        file: "Primeira Imagem",
        url: "./img/AbnerLaura-1.jpg",
    },
    {
        file: "Segunda Imagem",
        url: "./img/AbnerLaura-2.jpg",
    },
    {
        file: "Terceira Imagem",
        url: "./img/AbnerLaura-3.jpg",
    },
    {
        file: "Quarta Imagem",
        url: "./img/AbnerLaura-4.jpg",
    },
    {
        file: "Quinta Imagem",
        url: "./img/AbnerLaura-5.jpg",
    },
    {
        file: "Sexta Imagem",
        url: "./img/AbnerLaura-6.jpg",
    },
    {
        file: "Sétima Imagem",
        url: "./img/AbnerLaura-7.jpg",
    },
    {
        file: "Oitava Imagem",
        url: "./img/AbnerLaura-8.jpg",
    },
    {
        file: "Nona Imagem",
        url: "./img/AbnerLaura-9.jpg",
    },
    {
        file: "Decima Imagem",
        url: "./img/AbnerLaura-10.jpg",
    },

]

var actualImg = {};

function goHome() {
    this.selectImg(this.files[0])
}

function create() {
    const div = document.querySelector('.carousel-items');
    this.files.forEach((item) => {
        const tags =`<div class="carousel__item" id="slider">
                          <img class="carousel__img"
                          src="${item.url}" alt="" height="200" width="300">
                        </div>`
        const element = document.createElement('div');
        element.innerHTML = tags;
        element.addEventListener('click', () => this.selectImg(item))
        div.appendChild(element)
    })
}

function next() {
    this.position = this.files.indexOf(this.actualImg);
    this.selectImg(this.files[this.position + 1])
    this.addTitle();
}

function previous() {
    this.position = this.files.indexOf(this.actualImg);
    this.selectImg(this.files[this.position - 1])
    this.addTitle();
}

function addTitle(title) {
    var title = document.querySelector('.content__title');
    title.textContent = `${this.actualImg.file}`;
}

function selectImg(item) {
    var body = document.querySelector('.body');
    body.style.backgroundImage = `url('${item.url}')`
    this.actualImg = item;
    this.addTitle();
}
