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
body.appendChild(paragraph);


let score =  document.createElement('p');
score.id = 'score';
body.appendChild(score); 
let num = 0;
score.innerText = 'Placar: ' + num;

let container = document.createElement('div');
container.id = 'container';
body.appendChild(container);

let bgColor = [];
for(let index = 0; index < 6; index += 1){
    let ball = document.createElement('div');
    ball.className = 'ball';
    container.appendChild(ball);
    ball.style.backgroundColor = randomColor();
    bgColor.push(ball.style.backgroundColor);  
}

paragraph.innerText = bgColor[Math.floor(Math.random()*6)]

let answer = document.createElement('p');
answer.id = 'answer';
answer.innerText = 'Escolha uma cor';
body.appendChild(answer);

container.addEventListener('click', compare);

 function compare(event){
    if(event.target.style.backgroundColor === paragraph.innerText){
        answer.innerText = 'Acertou!' 
        num += 3;
        score.innerText = 'Placar: ' + num;
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
    let newBgColors = [];
    for(let index = 0; index < balls.length; index += 1){
        balls[index].style.backgroundColor = randomColor();
        newBgColors.push(balls[index].style.backgroundColor);
    } 
    if(answer.innerText !== 'Escolha uma cor'){
        answer.innerText = 'Escolha uma cor'
    }
    paragraph.innerText = newBgColors[Math.floor(Math.random()*6)];
} 