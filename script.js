let r = Math.floor(Math.random()*255);
let g = Math.floor(Math.random()*255);
let b = Math.floor(Math.random()*255);

let body = document.querySelector('body');
let paragraph = document.createElement('p');
paragraph.id='rgb-color';
paragraph.innerText = '(' + r + ', ' + g + ', ' + b + ')';
body.appendChild(paragraph);