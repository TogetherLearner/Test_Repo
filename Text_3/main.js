const canvas =document.getElementById('canvas');
canvas.height=window.innerHeight -100;
canvas.width= window.innerWidth -50;

const context = convas.getContext("2d");

let x= null,
y= null;
context.linewidth=5;

let draw = false ;
context.strokeStyle = "#010600"

window.addEventListener('mousedown',(e)=>(draw=true))
window.addEventListener('mouseup', (e) => (draw = false))

window.addEventListener('mousemove', (e)=>{
    if(x==null || y==null || !draw){
        x= e.clientX;
        y=e.clientY;
        return ;
    }
    let currentX=e.clientX,
    currentY = e.clientY;

    context.beginPath();
    context.moveTo(x,y);
    context.lineTo(currentX,currentY);
 context.stroke();

 x= currentX;
 y= currentY;

});
document.getElementById('clear').onclick=function(){
    context.clearRect(0,0,canvas.width,canvas.height);
};

document.querySelectorAll('.colorChange').forEach(el=>{
    el.onclick=function(){
        console.log('clicked')
        context.strokeStyle= el.style.backgroundColor;
    };
});




