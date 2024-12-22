const loading = document.getElementById('section-1');
const spinElement = document.querySelector(".section-1");
const javaScripti = document.getElementById('section-2');
const section2 = document.getElementById('section-2');
const section3 = document.getElementById('section-3');
const section4 = document.getElementById('section-4');

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
        document.documentElement.style.setProperty('--colorDynamic', 'green');
        setTimeout(() => {
            javaScripti.classList.remove('javascript-An');

        }, 20000);
        break;
        case 4: 
        javaScripti.classList.remove('javascript-An');
        javaScripti.classList.add('javascript-An');
        document.documentElement.style.setProperty('--colorDynamic', 'gray');
        setTimeout(() => {
            javaScripti.classList.remove('javascript-An');

        }, 20000);
        break;
        case 5: 
        javaScripti.classList.remove('javascript-An');
        javaScripti.classList.add('javascript-An');
        document.documentElement.style.setProperty('--colorDynamic', 'pink');
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

function changeData(){
        section3.classList.toggle('section-3-full');
        section2.classList.toggle('section-2-full');
        javaScripti.classList.toggle('javascript-An');

        document.documentElement.style.setProperty('--colorDynamic', 'black');

        setTimeout(() => {
            document.querySelector('.mini-section-2').classList.toggle('active');
        }, 1000);


}

