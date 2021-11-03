let tabs=[
    {
        header: 'Один',
        body: 'Первая вкладка',

    },
    {
        header: 'Два',
        body: 'Вторая вкладка',

    },
    {
        header: 'Три',
        body: 'Третья вкладка',

    }
];

const tabHeader=document.querySelector('.tab-header');
const tabBodyItem=document.querySelector('.tab-body_item');

let i = 0;
tabs.forEach(tab=>{
    let divHeader=createElement('div', ['tab-header_item'], `<span>${tab.header}</span>`)
    divHeader.dataset.target=i;
    divHeader.addEventListener('click',doActiveTab)
    tabHeader.append(divHeader)
    i++;
})

start();

function start() {
    tabHeader.firstChild.classList.add('active')
    tabBodyItem.innerHTML = `<p>${tabs[0].body}</p>`
}

function createElement(el, classes, template) {
    let elem = document.createElement(el)
    elem.classList.add(...classes)
    elem.innerHTML = template
    return elem;

}

function doActiveTab(e){
    clearTab();
    
    let currentHeader=e.target.closest('div.tab-header_item')
    currentHeader.classList.add('active')

    let currentTab = tabs[currentHeader.dataset.target]
    tabBodyItem.innerHTML = `<p>${currentTab.body}</p>`
}

function clearTab(){
    [...tabHeader.children].forEach(item=>{
        item.classList.remove("active")
    });

}