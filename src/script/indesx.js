const loading = document.getElementById('section-1');
const spinElement = document.querySelector(".section-1");
function timeload () {
    var loadTime = window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart; 
    return loadTime;
}
console.log(timeload())

function spinMotor (){
    spinElement.classList.add('rotating') 
    
}

function loadingsection(){

        setTimeout( loading.classList.add('hide') , timeload())
        setTimeout( loading.classList.add('hidden') , timeload())

}