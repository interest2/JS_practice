var isOver=false;
var l=0;
var t=0;
var btn=document.getElementById("btn");
btn.onmousedown=mouseDown;
btn.onmousemove=mouseMove;
btn.onmouseup=mouseUp;

function mouseDown(event){
    console.log('a');
    var e=event;
    x=e.clientX;
    y=e.clientY;
    l=parseInt(btn.style.left);
    t=parseInt(btn.style.top);
    isOver=true;
}
function mouseMove(event){
    if(isOver){
        var e=event;
        var nl=l+e.clientX-x;
        var nt=t+e.clientY-y;
        btn.style.left=nl+"px";
        btn.style.top=nt+"px";
    }
}
function mouseUp(event){
    if(isOver){
        isOver=false;
    }
}