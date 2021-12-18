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

/* let score =  document.createElement('p');
score.id = 'score';
score.innerText = 'Placar: 0';
body.appendChild(score); */

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

console.log(bgColor);
paragraph.innerText = bgColor[Math.floor(Math.random()*6)]

let answer = document.createElement('p');
answer.id = 'answer';
answer.innerText = 'Escolha uma cor';
body.appendChild(answer);

container.addEventListener('click', compare);

 function compare(event){
    //console.log(event.target.style.backgroundColor);
    // console.log(paragraph.innerText);
    if(event.target.style.backgroundColor === paragraph.innerText){
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