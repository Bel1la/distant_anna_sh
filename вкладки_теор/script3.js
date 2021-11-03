//динамический
let tabs=[
    {
        header: 'Один',
        body: 'Первая вкладка',
        target: 'tab-1'//nen
    },
    {
        header: 'Два',
        body: 'Вторая вкладка',
        target: 'tab-2'//nen
    },
    {
        header: 'Три',
        body: 'Третья вкладка',
        target: 'tab-3'//nen
    }
];

const tabHeader=document.querySelector('.tab-header');
const tabBodyItem=document.querySelector('.tab-body_item');
let i=0;//
tabs.forEach(tab=>{
    let divHeader=createElement('div',['tab-header_item'], `<span>${tab.header}</span>`)
    divHeader.dataset.target=tab.target//=i
    divHeader.addEventListener('click',doActiveTab)
    tabHeader.append(divHeader)
    //i++
})

start()

function start(){
    tabHeader.firstChild.classList.add("active")
    tabBodyItem.innerHTML=`<p>${tabs[0].body}</p>`
    tabBodyItem.classList.add('active')
}
function createElement(el,classes,template){
    let elem=document.createElement(el)
    elem.classList.add(...classes)
    elem.innerHTML=template
    return elem;
}
function doActiveTab(e){
    clearTab();
    //console.log(e.target)//просто где щелчек
    //console.log(e.currentTarget)//для которого прописано событие
    //console.log(e.target.closest('div.tab-header_item'))//для которого прописано событие
    let currentHeader=e.target.closest('div.tab-header_item')
    currentHeader.classList.add('active')

    let currentTab=tabs.find(item=>item.target===currentHeader.dataset.target)
    //tabs[currentHeader.dataset.target]
    tabBodyItem.innerHTML=`<p>${currentTab.body}</p>`
    tabBodyItem.classList.add('active')
}

function clearTab(){
    [...tabHeader.children].forEach(item=> item.classList.remove("active"));
}
