let sectionList = document.querySelectorAll('.app .feature');

// 1
let itemList = sectionList[1]

itemList.addEventListener('click', function(e){
    let element = e.target;
    if(element.localName === 'li'){
        element.style.textDecoration = 'line-through';
    }
});

// 2
let itemList2 = sectionList[2];

itemList2.addEventListener('click', function(e){
    let element = e.target;
    if(element.localName === 'li'){
        element.style.opacity = '0';
    }
});

//3
let imgList = sectionList[3];

imgList.addEventListener('click', function(e){
    let element = e.target;
    console.log(element);
    if(element.localName === 'img'){
        element.style.width = '0';
    }
});

//4
let button = document.querySelector('#destroy-all');

button.addEventListener('click', function(){
    for(let i of itemList.querySelectorAll('li')){
        i.style.textDecoration = 'line-through';
    }
    for(let i of itemList2.querySelectorAll('li')){
        i.style.opacity = '0';
    }
    for(let i of imgList.querySelectorAll('img')){
        i.style.width = '0';
    }
});
