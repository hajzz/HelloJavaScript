"use strict"

window.addEventListener('DOMContentLoaded', () => {

    const tabsParent = document.querySelector('.tabheader__items'),
          tabs = document.querySelectorAll('.tabheader__item'),
          tabContent = document.querySelectorAll('.tabcontent');

// 1.
function hideTabContent(){
    tabContent.forEach((item) =>{
        item.classList.add('hide');
        item.classList.remove('show');
    })

    tabs.forEach((item) =>{
        item.classList.remove('tabheader__item_active');
    })
};

function showTabContent(i = 0){
    tabContent[i].classList.add('show', 'fade');
    tabContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
};

hideTabContent();
showTabContent();


//2

tabsParent.addEventListener('click', (e)=>{
    const target = e.target;
    console.log(target)
    if(target && target.classList.contains('tabheader__item')){
        tabs.forEach((item, i) =>{
            if(target == item){
                hideTabContent();
                showTabContent(i);
            }
        });
    }
})

// console.log(tabsParent)

});
