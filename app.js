const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext('2d');

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;


function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}

function onMouseMove(event){
    //client : window 의 좌표
    //offset : canvas 내의 좌표
    const x = event.offsetX;
    const y = event.offsetY;
    
    //픽셀을 다룰수 있는 (width, height가 있는)element를 만들어야함
    if(painting === false){
        ctx.beginPath(); //경로 생성
        ctx.moveTo(x, y); //선 시작 좌표
    }else{
        ctx.lineTo(x, y); //선 끝 좌표
        ctx.stroke(); //선 그리기
    }
}


if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}