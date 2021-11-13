'use script';

let blok=document.getElementById('white');
let zones=document.querySelectorAll(".dropZone")

blok.addEventListener('dragstart',dragstart);
blok.addEventListener('dragend', dragend);
    // document.addEventListener('dragover',(e)=>{
    //     e.preventDefault();
    // });
    // document.addEventListener("drop",(e)=>{
    //     [...e.dataTransfer.files].forEach(zone=>{
    //     zone.addEventListener('dragenter',dragenter);
    // zone.addEventListener('dragleave',dragleave);
    // zone.addEventListener('dragover',dragover);
    // zone.addEventListener('drop',dragdrop);
    // })
    // })
zones.forEach(zone=>{
    zone.addEventListener('dragenter',dragenter);
    zone.addEventListener('dragleave',dragleave);
    zone.addEventListener('dragover',dragover);
    zone.addEventListener('drop',dragdrop);
});

function dragstart(e){
    blok.classList.add('drag-start');
    //e.target.style.opacity="0.5";
    e.dataTransfer.setData('id',blok.dataset.target);
    setTimeout(()=>{
        e.target.style.display="none";
    },0);
    
}
function dragend(e){
    e.target.classList.remove('drag-start');
    e.target.style.display=""
}

function dragenter(e){
    e.target.classList.add('zone');
}
function dragleave(e){
    e.target.classList.remove('zone');
    e.target.classList.remove("right");
}
function dragover(e){
    e.preventDefault();
}
function dragdrop(e){
    e.preventDefault();
    e.target.classList.remove('zone');
    if(e.target.id===e.dataTransfer.getData("id")){
        e.target.classList.add("right");
    }
    e.target.append(blok);
}