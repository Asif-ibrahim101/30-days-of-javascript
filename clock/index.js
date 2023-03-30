const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const setDate = ()=> {
    let date = new Date();
    
    let seconds = date.getSeconds();
    let secondsToDegree = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsToDegree}deg)`;

    let minutes = date.getMinutes();
    let minutesToDegree = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesToDegree}deg)`;

    let hours = date.getHours();
    let hourToDegree = ((hours / 12) * 360) + 90
    hourHand.style.transform = `rotate(${hourToDegree}deg)`;
    
};

setInterval(() => {
    setDate()
}, 1000);