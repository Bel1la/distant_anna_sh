const headerItems = document.querySelectorAll('.tab-header_item')
const bodyItems= document.querySelectorAll('.tab-body_item')

headerItems.forEach(header=>{
    header.addEventListener("click",(e)=>{
        clearTab();
        header.classList.add('active')
        document.querySelector(header.dataset.target).classList.add('active')
        //
    })
})

function clearTab(){
    headerItems.forEach(item=>{
        item.classList.remove("active")
    })
    bodyItems.forEach(item=>{
        item.classList.remove("active")
    })
}