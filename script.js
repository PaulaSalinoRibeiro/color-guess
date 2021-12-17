let body = document.querySelector('body');

function randomColor(){
    let color;
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);

    color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    return color;
}

let paragraph = document.createElement('p');
paragraph.id='rgb-color';
paragraph.innerText = randomColor();
body.appendChild(paragraph);

let container = document.createElement('div');
container.id = 'container';
body.appendChild(container);

function createdBall(){
    let ball = document.createElement('div');
    ball.className = 'ball';
    ball.style.backgroundColor = randomColor();
    container.appendChild(ball);
}

for(let index = 0; index < 6; index += 1){
    createdBall();
}

let answer = document.createElement('p');
answer.id = 'answer';
answer.innerText = 'Escolha uma cor';
body.appendChild(answer);

container.addEventListener('click', compare);

function compare(event){
    if(event.target.backgroundColor === paragraph.innerText){
        answer.innerText = 'Acertou!'
    } else{
        answer.innerText = 'Errou! Tente novamente!'
    }
}

let reset = document.createElement('button');
reset.id = 'reset-game';
reset.innerText = 'Reiniciar';
body.appendChild(reset);

reset.addEventListener('click', reload);

function reload(){
    let balls = document.querySelectorAll('.ball');
    for(let index = 0; index < balls.length; index += 1){
        balls[index].style.backgroundColor = randomColor();
    } 
    if(answer.innerText !== 'Escolha uma cor'){
        answer.innerText = 'Escolha uma cor'
    }
    paragraph.innerText = randomColor();
} 