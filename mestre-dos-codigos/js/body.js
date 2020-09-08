window.location = "#wall-1";

var position = 1;

function nextPage() {
    var body = document.querySelector('.body');
    var title = document.querySelector('.code-master__body_content_title');
    if(this.position < 4) {
    this.position += 1;
    switch (position) {
        case 1: 
            body.classList.add('first');
            title.textContent = 'Primeira Imagem';
        break;
        case 2: 
            body.classList.add('second');
            body.classList.remove('first');
            title.textContent = 'Segunda Imagem';
        break;
        case 3: 
            body.classList.add('third');
            body.classList.remove('second');
            title.textContent = 'Terceira Imagem';
        break;
        case 4: 
            body.classList.add('fourth');
            body.classList.remove('third');
            title.textContent = 'Quarta Imagem';
        break;
    } 
    }
    
}

function previousPage() {
    var body = document.querySelector('.body');
    var title = document.querySelector('.code-master__body_content_title');
    if (this.position != 1) {
    this.position -= 1;
    switch (position) {
        case 1: 
            body.classList.add('first');
            body.classList.remove('second');
            title.textContent = 'Primeira Imagem';
        break;
        case 2: 
            body.classList.add('second');
            body.classList.remove('third');
            title.textContent = 'Segunda Imagem';
        break;
        case 3: 
            body.classList.add('third');
            body.classList.remove('fourth');
            title.textContent = 'Terceira Imagem';
        break;
        case 4: 
            body.classList.add('fourth');
            title.textContent = 'Imagem 4';
        break;
    }
    }
    
}

function goHome() {
    this.position = 1;
    var body = document.querySelector('.body');
    var title = document.querySelector('.code-master__body_content_title');
    switch (body.className) {
        case 'body second':
            body.classList.remove('second');
            break;
        case 'body third': 
            body.classList.remove('third');
            break;
        case 'body fourth': 
            body.classList.remove('fourth');
            break;
    }
    title.textContent = 'Primeira Imagem';
    body.classList.add('first');
}