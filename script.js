const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggleEl = document.querySelector('.toggle');


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

toggleEl.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    if(html.classList.contains('dark')) {
        toggleEl.innerText = 'Light Mode';
        html.classList.remove('dark');
    } else {
        toggleEl.innerText = 'Dark Mode';
        html.classList.add('dark');
    }
})

function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    //this is because our clock is a 12-hour clock! for a 24-hour clock, this variable is not necessary!
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const needle = document.querySelectorAll('.needle');

    
    //isso é para os ponteiros não fazerem uma volta inteira ao completar 60s/60min:
    needle.forEach(n => { 
        if (seconds > 0 && seconds < 60) { n.style.transition = 'all 0.3s ease-in';
        } else {
            needle[2].style.transition = 'none';
            }
    })


    // hourEl.style.transform = `translate(-50%, -100%) rotate(${hoursForClock*30}deg)`

    // hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`;
    // minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
    // secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;

    hourEl.style.transform=`translate(-50%,-100%) rotate(${hoursForClock*30}deg)`;
    minuteEl.style.transform=`translate(-50%,-100%) rotate(${minutes*6}deg)`;
    secondEl.style.transform=`translate(-50%,-100%) rotate(${seconds*6}deg)`;

    

    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes}`
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;}

setTime();

setInterval(setTime, 1000);