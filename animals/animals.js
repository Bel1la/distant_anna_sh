//'use script';

let bloks=document.querySelectorAll('.anim');
let zones=document.querySelectorAll(".cell")
let backZones=document.querySelectorAll(".animals")
bloks.forEach(blok=>{
    blok.addEventListener('dragstart',dragstart);
    blok.addEventListener('dragend', dragend);
})    // document.addEventListener('dragover',(e)=>{
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
backZones.forEach(zone=>{
    zone.addEventListener('dragenter',dragenter);
    zone.addEventListener('dragleave',dragleave);
    zone.addEventListener('dragover',dragover);
    zone.addEventListener('drop',dragdrop);
});

let anim=null;
function dragstart(e){
    anim=e.target
    //e.target.classList.add('drag-start');
    //e.target.style.opacity="0.5";
    setTimeout(()=>{
        e.target.style.display="none";
    },0);
}
function dragend(e){
    e.target.classList.remove('drag-start');
    e.target.style.display=""
}

function dragenter(e){
    if(e.target.class=="cell"&&anim.dataset.target=="hish"){
        e.target.classList.add('good');}
}
function dragleave(e){
    e.target.classList.remove('good');
}
function dragover(e){
    e.preventDefault();
}
function dragdrop(e){
    e.preventDefault();
    if(e.target.tagName !== "IMG"){
    e.target.append(anim);
    
    if(anim.dataset.target=="hish"){
        e.target.classList.add('good');}
}
}
