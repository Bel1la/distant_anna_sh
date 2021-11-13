//'use script';

let bloks=document.querySelectorAll('.anim');
let zones=document.querySelectorAll(".cell")
let backZones=document.querySelectorAll(".animals")
let kolvo=document.querySelector(".kol_vo")
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
    if(e.target.classList.value=='cell'&&anim.dataset.target=="hish"){
        anim.classList.add('good');}
        
}
function dragleave(e){
    anim.classList.remove('good');
}
function dragover(e){
    e.preventDefault();
}
function count(){
    return document.querySelectorAll('.cell>img[data-target="hish"]').length;
}
function dragdrop(e){
    e.preventDefault();
    if(e.target.tagName !== "IMG"){
    e.target.append(anim);
    
    if(anim.dataset.target=="hish"&&e.target.classList.value=='cell'){
        anim.classList.add('good');
    }

    //console.log(anim.dataset.target,e.target.classList)
}
if(count()==document.querySelectorAll('img[data-target="hish"]').length)
kolvo.textContent=`Вы нашли всех хищников`
else{
kolvo.textContent=`Количество хищников ${count()}`;}
}
