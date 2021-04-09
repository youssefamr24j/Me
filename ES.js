const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
const distance = 10;
const {width , height} = canvas;

let x = Math.floor(Math.random()*width);
let y = Math.floor(Math.random()*height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
ctx.imageSmoothingQuality="high";
// ctx.beginPath();
// ctx.moveTo(200,200);
let hue = 0
ctx.lineTo(x,y);
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.stroke();

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function drawLimit (Ok){
    if(Ok === false){
        ctx.lineTo(x,y);
        hue +=1 ;
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        ctx.stroke(); 
    }
}

const draw = function(key){
    ctx.beginPath();
    ctx.moveTo(x, y);
    if(key.includes('Up')){
        y = y - distance;
        if(y>0){
            drawLimit(false);
        }
    }else if(key.includes('Down')){
        y = y + distance;
        if(y<height){
            drawLimit(false);
        }
    }else if(key.includes('Right')){
        x = x + distance;
        if(x<width){
            drawLimit(false);
        }
    }else if(key.includes('Left')){
        x = x - distance;
        if(x>0){
            drawLimit(false);
        }
    };
};

const handleKeyPressed  = function ({key}){
    if(key.includes('Arrow')){        
        draw(key)
    }
};

const handleShakeClick = function (){
    ctx.clearRect(0,0,width,height);
}

window.addEventListener("keydown",handleKeyPressed);

shakeButton.addEventListener('click', handleShakeClick)