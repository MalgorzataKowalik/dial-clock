function setDate() {
    const nowTime = new Date();
    const seconds = nowTime.getSeconds();
    const minutes = nowTime.getMinutes();
    const hours = nowTime.getHours();
    console.log(hours, minutes, seconds)
    const secondsHand = document.querySelector('.second-hand');
    secondsHand.style.transform = `translateX(-50%) rotate(${seconds / 60 * 360}deg)`;
    const minutesHand = document.querySelector('.min-hand');
    minutesHand.style.transform = `translateX(-50%) rotate(${(minutes / 60 * 360) + (seconds/60 * 6)}deg)`;
    const hoursHand = document.querySelector('.hour-hand');
    hoursHand.style.transform = `translateX(-50%) rotate(${(hours / 12 * 360) + (minutes/60 * 30)}deg)`;
}


setInterval(setDate, 1000);