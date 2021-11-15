let x=0, y=0, dragItem="";
document.body.addEventListener('dragstart',moveStart);
document.body.addEventListener('dragover',moveDragOver);
document.body.addEventListener('drop',moveDrop);



function moveStart(e){
    dragItem=e.target;
    x=e.offsetX;
    y=e.offsetY;

    dragItem.style.zIndex=10;
}

function moveDrop(e){
    e.preventDefault();
    
    dragItem.style.left =(e.pageX-x) + "px";
    dragItem.style.top =(e.pageY-y) + "px";
    
}
function moveDragOver(e){
    e.preventDefault();
    
}
function resetZIndex(){
    document.qaerySelectorAll('img').forEach(item=>item.style.zIndex=5);
}
