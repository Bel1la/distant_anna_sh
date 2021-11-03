//динамический
let tabs=[
    {
        header: 'Один',
        body: 'Первая вкладка',
        target: 'tab-1'
    },
    {
        header: 'Два',
        body: 'Вторая вкладка',
        target: 'tab-2'
    },
    {
        header: 'Три',
        body: 'Третья вкладка',
        target: 'tab-3'
    }
];

const tabHeader=document.querySelector('.tab-header');
const tabBody=document.querySelector('.tab-body');

tabs.forEach(tab=>{
    let divHeader=document.createElement('div')
    divHeader.classList.add('tab-header_item')
    divHeader.dataset.target=tab.target
    divHeader.innerHTML=`<span>${tab.header}</span>`
    divHeader.addEventListener('click',doActiveTab)

    let divBody=document.createElement('div')
    divBody.classList.add('tab-body_item')
    
    divBody.innerHTML=`<p>${tab.body}</p>`
    divBody.id=tab.target

    tabHeader.append(divHeader)
    tabBody.append(divBody)
    
})
function doActiveTab(e){
    clearTab();
    //console.log(e.target)//просто где щелчек
    //console.log(e.currentTarget)//для которого прописано событие
    //console.log(e.target.closest('div.tab-header_item'))//
    let currentHeader=e.target.closest('div.tab-header_item')
    currentHeader.classList.add('active')

    let currentBody=document.querySelector(`#${currentHeader.dataset.target}`)
    currentBody.classList.add('active')
}



function clearTab(){
    [...tabHeader.children].forEach(item=>{
        item.classList.remove("active")
    });
    [...tabBody.children].forEach(item=>{
        item.classList.remove("active")
    });
}
