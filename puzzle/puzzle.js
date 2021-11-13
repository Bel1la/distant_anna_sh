let bloks=document.querySelectorAll('.fragm');
let zones=document.querySelectorAll(".cell")
let backZones=document.querySelectorAll(".sect")
bloks.forEach(blok=>{
    blok.addEventListener('dragstart',dragstart);
    blok.addEventListener('dragend', dragend);
})    

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

let blok=null;
function dragstart(e){
    blok=e.target;
    e.dataTransfer.setData('id',blok.dataset.target);
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
// let kol=0;
function count(){
    // if(e.target.classList=="cell"&&e.target.id==e.dataTransfer.getData("id")){
    //  kol++
    // }
    // return kol
    let a=document.querySelectorAll('.cell>img');
    //console.log(a.dataset.target)
    let kol=0;
    //let targ=[];
    //let i=0;
    //bloks.forEach(item=>targ.push(item.dataset.target));
    //console.log(targ);
    let i=0;
    for ( i of a) {
        console.log([...a][i].dataset.target,zones[i].id)
        if (a[i].dataset.target==zones[i].target.id) {
            
            
        }
        i++
    }
    // a.forEach(img=>{
    //     if(img.dataset.target===zones.){kol++}
    //     i++;
    //     console.log(img.dataset.target)
    // })
    //console.log(kol,z)
    // if(kol==document.querySelectorAll('.cell').length)
    // return "вы составили пазл! Поздравляю!"
    // else 
    return kol
    // }document.querySelectorAll('img[data-target="hish"]').length;
}
let p=document.querySelector(".kol_vo");
function dragdrop(e){
    e.preventDefault();
    e.target.classList.remove('zone');
    //console.log(e.target.id,e.dataTransfer)
    if(e.target.tagName !== "IMG"){
        e.target.append(blok);
    }
    // let a=document.querySelectorAll('.cell>img');
    // a.dataTarget==e.dataTransfer.getData("id");
    //console.log(a.dataset.target);
    //p.textContent=`${count()}`;
}
