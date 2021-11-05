let tabs=[
    {
        header: 'Night Visions <br> (2012—2014)',
        h:'Night Visions (2012—2014)',
        body: '4 сентября 2012 года вышел первый полноценный альбом группы — Night Visions. Пластинка долгое время была в середине списка Billboard-200, лишь к началу 2013 года работа обрела популярность. В частности, хит «Radioactive» был в аутсайдерах списка на момент своего выхода (март 2012 года), однако к апрелю 2013 он достиг 7 места в Billboard Hot 100, 1 места в Billboard Alternative Songs и Billboard Rock Songs. Сингл вошёл в топ-3 самых продаваемых песен по итогам 2013 года.',
        img: 'img4-16/night.jpg',
        alt: 'night.jpg',
    },
    {
        header: 'Smoke + Mirrors <br> (2015—2016)',
        h: 'Smoke + Mirrors (2015—2016)',
        body: 'В сентябре 2014 года группа выпустила сингл «I Bet My Life», а в ноябре сняла на него видеоклип. В декабре вышел второй сингл — «Gold». Вскоре состоялся анонс альбома, который был выпущен 17 февраля 2015 года. Он был назван «Smoke + Mirrors». В поддержку альбома состоялся мировой тур Smoke and Mirrors World Tour, в котором группа посетила Россию.',
        img: 'img4-16/smoke.png',
        alt: 'smoke.png',
    },
    {
        header: 'Evolve <br> (2017—2018)',
        h: 'Evolve (2017—2018)',
        body: '8 мая 2017 года группа анонсировала выход нового альбома. Релиз альбома Evolve (название стилизовано как ƎVOLVE) состоялся 23 июня 2017 года. Хиты «Believer» и «Thunder» сравнительно быстро достигли миллиарда просмотров на сервисе YouTube. Песня «Believer» Imagine Dragons одержала победу в номинации «Лучшая рок/альтернатива песня» на церемонии «Teen Choice Awards», которая прошла 14 августа 2017 года.',
        img: 'img4-16/evolve.jpg',
        alt: 'evolve.jpg',
    },
    {
        header: 'Origins <br> (2018)',
        h: 'Origins (2018)',
        body: '3 октября 2018 года группа анонсировала выход своего четвёртого студийного альбома «Origins», релиз которого состоялся 9 ноября. «Zero» и «Natural» стали ведущими синглами альбома, в то время как «Born to Be Yours» была представлена в международном подарочном издании альбома. Сама группа охарактеризовала этот альбом как сестринский к их предыдущему альбому Evolve.',
        img: 'img4-16/origins.jpg',
        alt: 'origins.jpg',
    }
];


const tabHeader=document.querySelector('.tab-header');
const tabBodyItem=document.querySelector('.tab-body');


tabs.forEach((tab, index) =>{
    let divHeader=createElement('div', ['tab-header_item'], `<span>${tab.header}</span>`)
    divHeader.dataset.target=index;
    divHeader.addEventListener('click',doActiveTab)
    tabHeader.append(divHeader)
})

document.addEventListener('DOMContentLoaded',()=>{start();})
 

function start() {
    tabHeader.firstChild.classList.add('active');
    tabBodyItem.innerHTML = `<h3>${tabs[0].h}</h3><section><p>${tabs[0].body}</p><img src=${tabs[0].img} alt=${tabs[0].alt}></section>`;
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
    tabBodyItem.innerHTML = `<h3>${currentTab.h}</h3><section><p>${currentTab.body}</p><img src='${currentTab.img}' alt='${currentTab.alt}'></section>`
}
//
function clearTab(){
    [...tabHeader.children].forEach(item=>{
        item.classList.remove("active")
    });

}

/*



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
*/