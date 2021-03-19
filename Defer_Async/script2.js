console.log('Script2');




function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    //асинхронность выкл
    document.body.append(script);
}

loadScript('script3.js');

//Функция создаёт элемент и загружает скрипт в страницу.