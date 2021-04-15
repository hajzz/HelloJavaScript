


//1
// let id = setTimeout(function log(){
//     console.log('Hi');
//     id = setTimeout(log, 500)
// }, 500)


//2

const btn = document.querySelector('.btn')

function animation(){
    const box = document.querySelector('.box');
    pos = 0;

        let id = setInterval(frame, 10)
        function frame(){
            if(pos == 300){
                clearInterval(id);
            }else{
                pos++;
                box.style.top = pos + "px";
                box.style.left = pos + "px";
            }
        }
};

btn.addEventListener('click', animation)