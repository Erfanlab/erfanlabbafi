const loading = document.getElementById('section-1');
const spinElement = document.querySelector(".section-1");
const javaScripti = document.getElementById('section-2');

function deviceMod(){
    if( window.screen.width < 1000 ){
        document.getElementById('body').classList.add('mobile')
    }else{
        document.getElementById('body').classList.add('desktop')
    }
}

document.getElementById('body').addEventListener('onload',deviceMod())
console.log(window.screen)

function timeload () {
    var loadTime = window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart; 
    return loadTime;
}

function spinMotor (){
    spinElement.classList.add('rotating') 
    
}

function loadingsection(){
        setTimeout( loading.classList.add('hidden') , timeload())

}





function onclicki(a){
    if (window.screen.width > 1000){
    switch(a){
        case 1 :
        javaScripti.classList.remove('javascript-An');
        javaScripti.classList.add('javascript-An');
        document.documentElement.style.setProperty('--colorDynamic', 'yellow');
        setTimeout(() => {
            javaScripti.classList.remove('javascript-An');

        }, 20000);
        break;
        case 2 :
        javaScripti.classList.remove('javascript-An');
        javaScripti.classList.add('javascript-An');
        document.documentElement.style.setProperty('--colorDynamic', 'red');
        setTimeout(() => {
            javaScripti.classList.remove('javascript-An');

        }, 20000);
        break;
        case 3: 
        javaScripti.classList.remove('javascript-An');
        javaScripti.classList.add('javascript-An');
        document.documentElement.style.setProperty('--colorDynamic', 'black');
        setTimeout(() => {
            javaScripti.classList.remove('javascript-An');

        }, 20000);
        break;
        case 4: 
        javaScripti.classList.remove('javascript-An');
        javaScripti.classList.add('javascript-An');
        document.documentElement.style.setProperty('--colorDynamic', 'black');
        setTimeout(() => {
            javaScripti.classList.remove('javascript-An');

        }, 20000);
        break;
        case 5: 
        javaScripti.classList.remove('javascript-An');
        javaScripti.classList.add('javascript-An');
        document.documentElement.style.setProperty('--colorDynamic', 'black');
        setTimeout(() => {
            javaScripti.classList.remove('javascript-An');

        }, 20000);
        break;
    }}
    else{
        javaScripti.classList.remove('javascript-An');
        console.log('mobile')

    }
}



