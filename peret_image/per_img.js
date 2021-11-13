let blok=document.querySelector('.image');
let zones=document.querySelectorAll(".blok")

blok.addEventListener('dragstart',dragstart);
blok.addEventListener('dragend', dragend);

zones.forEach(zone=>{
    zone.addEventListener('dragenter',dragenter);
    zone.addEventListener('dragleave',dragleave);
    zone.addEventListener('dragover',dragover);
    zone.addEventListener('drop',dragdrop);
});

function dragstart(e){
    
    setTimeout(()=>{
        e.target.style.display="none";
    },0);
}
function dragend(e){
    
    e.target.style.display=""
}

function dragenter(e){
    e.target.classList.add('zone');
}
function dragleave(e){
    e.target.classList.remove('zone');
}
function dragover(e){
    e.preventDefault();
}
function dragdrop(e){
    e.preventDefault();
    e.target.classList.remove('zone');
    e.target.append(blok);
}